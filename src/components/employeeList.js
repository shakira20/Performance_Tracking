import react ,{ useEffect, useState }from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';
import {dataSource} from '../Mock/employeeData'
const EmployeeList = (props) =>{
  const val= dataSource;
 
  const state = props?.data && props?.data[0]?.role;
  
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
        hidden:(props?.data && props?.data[0]?.role === 'Admin')?false:true,
        render:(text, record, index) => <span style={{fontWeight: 'bold'}}>
          <Popconfirm title="Sure to delete?" onConfirm={(e) => {onDelete(record.key, e)}} >
            <a>Delete</a>
          </Popconfirm>
          </span>
      },
  ].filter(item => !item.hidden);
let employeeData;
const list = JSON.parse(sessionStorage.getItem("employeelist"));

  const [data,setData]=useState( list?list:dataSource);
  
  const onDelete = (key, e) => {
    e.preventDefault();
    const datas = data?.filter(item => item.key !== key);
    setData(datas);
    sessionStorage.setItem("employeelist",JSON.stringify(datas));
  }
  sessionStorage.setItem("employeelist",JSON.stringify(data));
   return  (<div data-testid='employeelist'>
        <h1>employee details</h1>
        

<Table dataSource={data} columns={columns} />
    </div>
)
}
export default EmployeeList;
