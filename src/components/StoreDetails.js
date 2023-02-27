import react, {useEffect,  useState } from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';
import dataSource from '../Mock/productData';
const StoreDetails = (props) =>{

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },{
    title: 'Action',
    key: 'action',
    hidden:(props?.data && props?.data[0]?.role === 'Admin')?false:true,
    render:(text, record, index) => <span style={{fontWeight: 'bold'}}>
      <Popconfirm title="Sure to delete?" onConfirm={(e) => {onDelete(record.key, e)}}>
        <a>Delete</a>
      </Popconfirm>
      </span>
  },
  ].filter(item => !item.hidden);
 let productData= JSON.parse(sessionStorage.getItem("productlist"));

  const [data,setData]=useState(productData?productData:dataSource);
  const onDelete = (key, e) => {
    e.preventDefault();
    const pro=JSON.parse(sessionStorage.getItem("productlist"));
    const datas = pro.filter(item => item.key !== key);
    setData(datas);
    sessionStorage.setItem("productlist",JSON.stringify(datas));
  }
  const product = props?.addStore;
  
  sessionStorage.setItem("productlist",JSON.stringify(data));

 
  
  // console.log(data,'hi orinal shak product')

   return  (<div data-testid='store'>
        <h1>Store Details</h1>
        

<Table dataSource={data} columns={columns}  />
    </div>
)
}
export default StoreDetails;
