import react ,{ useEffect, useState }from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';
const EmployeeList = (props) =>{
  // const val= dataSource;
 
  const state = props?.data && props?.data[0]?.role;
  const user= JSON.parse(sessionStorage.getItem("login_user"));
  const columns = [
    {
      title: 'Employee Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
      },
      {
        title: 'Phone Number',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
     {
        title: 'Action',
        key: 'action',
        hidden:(user && user?.role === 'Admin')?false:true,
        render:(text, record, index) => <span style={{fontWeight: 'bold'}}>
          <Popconfirm title="Sure to delete?" onConfirm={(e) => {onDelete(record.key, e)}} >
            <a>Delete</a>
          </Popconfirm>
          </span>
      },
  ].filter(item => !item.hidden);
let employeeData;
const list = JSON.parse(sessionStorage.getItem("employeelist"));

  const [data,setData]=useState(list?list:'');
  useEffect(()=>{
    fetch("https://mocki.io/v1/7969c5d4-dbc7-4d90-adfb-0198ae4c48c6")
    .then(res => res.json())
    .then(
      (result) => {
        setData(result.dataSource);
        console.log(result,'api')
      },)
  },[])
  
  const onDelete = (key, e) => {
    e.preventDefault();
    const datas = data?.filter(item => item.key !== key);
    setData(datas);
    sessionStorage.setItem("employeelist",JSON.stringify(datas));
  }
  sessionStorage.setItem("employeelist",JSON.stringify(data));
   return  (
   <div data-testid='employeelist'>
    <h1>employee details</h1>
    <Table dataSource={data} columns={columns} />
  </div>
)
}
export default EmployeeList;
