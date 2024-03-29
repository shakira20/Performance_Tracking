import react ,{ useEffect, useState }from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';

const Performances = (props) =>{

  const user= JSON.parse(sessionStorage.getItem("login_user"));
  const columns = [
    {title:'Employee Id',
    dataIndex:'id',
    key:'id',},
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Packed product',
      dataIndex: 'packed_product',
      key: 'packed_product',
    },
    {
      title: 'Product Category',
      dataIndex: 'product_category',
      key: 'product_category',
    },
    {
        title: 'No:of Package',
        dataIndex: 'no_of_package',
        key: 'no_of_package',
      },
      {
        title: 'Hours',
        dataIndex: 'hours',
        key: 'hours',
      },
      {
        title:'Date',
        dataIndex:'date',
        key:'date'
      },
      {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
      },
  ];
  const list = JSON.parse(sessionStorage.getItem("performance"));
  console.log(list,'list')

  const [data,setData]=useState(list?list:'');
  useEffect(()=>{
    fetch("https://mocki.io/v1/d9c6effb-10c0-42ad-a33e-6c14cb45076d")
    .then(res => res.json())
    .then(
      (result) => {
       if(!list)
       {
        setData(result.dataSource)
       }
        console.log(result,'api performance')
      },)
  },[])
  
  // let filtereddata =data;
  let filter; 
  const state = user && user?.role;
  const username =user && user?.username;
  // console.log(user)
  if(state !== 'Admin')
  {
    // console.log(props.data[1].username)
    filter = data && data?.filter(item => item?.name?.toLowerCase() === username?.toLowerCase());
    // setData(filtereddata)
  }
  sessionStorage.setItem("performance",JSON.stringify(data));
   return  (<div data-testid='performance'>
       {state !== 'Admin'?<h1>History of my performance</h1>: <h1>Performances of the Employees</h1>}
        

<Table dataSource={state !== 'Admin'?filter:data} columns={columns} />
    </div>
)
}
export default Performances;
