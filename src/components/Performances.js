import react ,{ useEffect, useState }from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';
import dataSource from '../Mock/performanceData';

const Performances = (props) =>{

  
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

  const [data,setData]=useState(list?list:dataSource);
  let filtereddata =list?list:dataSource;
  let filter; 
  sessionStorage.setItem("performance",JSON.stringify(data));
  const state = props?.data && props?.data[0]?.role;
  const username =props?.data && props?.data[1]?.username;
  // console.log(user)
  if(state !== 'Admin')
  {
    // console.log(props.data[1].username)
    filter = filtereddata?.filter(item => item?.name?.toLowerCase() === username?.toLowerCase());
    // setData(filtereddata)
  }
   return  (<div data-testid='performance'>
       {state !== 'Admin'?<h1>History of my performance</h1>: <h1>Performances of the Employees</h1>}
        

<Table dataSource={state !== 'Admin'?filter:data} columns={columns} />
    </div>
)
}
export default Performances;
