import React ,{useState,useEffect}from 'react';
import { Line } from '@ant-design/plots';
import { Input,TextField, Typography } from '@mui/material';
// import Input from 'antd/es/input/Input';

const Gragh = () => {

  
  const list = JSON.parse(sessionStorage.getItem("performance"));
const [data, setData] = useState([]);
const[value,setValue]=useState('2023-02-12');
const [show,setShow]=useState(false);
const[performance,setPerformance] = useState(list?list:'');
useEffect(()=>{
  fetch("https://mocki.io/v1/d9c6effb-10c0-42ad-a33e-6c14cb45076d")
  .then(res => res.json())
  .then(
    (result) => {
      setPerformance(result.dataSource);
      console.log(result,'api performance')
      console.log(performance,'ooi')
    },)
},[])
  useEffect(() => {
    if(value)
    {
      console.log(performance,'dfgghjj')
      const perform = performance && performance.filter((item)=>item.date === value);
      console.log(perform,'perform');
      const test = perform && perform.map((item,key)=>{
        const target = 200;
        const workhr= 9;
          const arr= (item.no_of_package/target)*(workhr/item.hours)*100;
          return(
            {
            performance:arr,
            name:item.name
            }
          )
        })

        setData(test);
        console.log(data,'dtt');
        console.log(value);
        // sessionStorage.setItem("data",test);
        if(!test.length)
        {
          setShow(true);
        }
        else{
          setShow(false);
        }
    }
  }, [value]);

  // const asyncFetch = () => {
  //   ;
  console.log(data)
  const config = {
    data,
    padding: 'auto',
    xField: 'name',
    yField: 'performance',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  
  return(
  <div data-testid='graph'>
    <div >
    <Typography style={{color:'darkblue'}} >select a date</Typography>
      &nbsp;&nbsp;&nbsp;
    <Input type='date'  value={value} onChange={(e)=>setValue(e.target.value)} style={{color:'#1976d2'}}></Input>
    </div>
    <br/>
    <div>
    {show?
    <Typography style={{marginTop:'100px'}}>Data is not available with respect to this date.Please select another date</Typography>:
    <Line {...config} />
    }</div>
  </div>)
   
};
export default Gragh;