import react, {useEffect,  useState } from 'react';
import { Space, Table, Tag ,Divider,Popconfirm} from 'antd';
const StoreDetails = (props) =>{
  const user= JSON.parse(sessionStorage.getItem("login_user"));
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
    hidden:(user && user?.role === 'Admin')?false:true,
    render:(text, record, index) => <span style={{fontWeight: 'bold'}}>
      <Popconfirm title="Sure to delete?" onConfirm={(e) => {onDelete(record.key, e)}}>
        <a>Delete</a>
      </Popconfirm>
      </span>
  },
  ].filter(item => !item.hidden);
 let productData= JSON.parse(sessionStorage.getItem("productlist"));

  const [data,setData]=useState(productData?productData:'');
  useEffect(()=>{
    fetch("https://mocki.io/v1/1557443a-f41d-470a-945c-508d2b01abe1")
    .then(res => res.json())
    .then(
      (result) => {
        if(!productData)
        {
          setData(result.dataSource);
        }
        
        console.log(result,'api')
      },)
  },[])
  const onDelete = (key, e) => {
    e.preventDefault();
    const pro=JSON.parse(sessionStorage.getItem("productlist"));
    const datas = pro.filter(item => item.key !== key);
    setData(datas);
    sessionStorage.setItem("productlist",JSON.stringify(datas));
  }
  const product = props?.addStore;
  
  sessionStorage.setItem("productlist",JSON.stringify(data));
  

   return  (<div data-testid='store'>
        <h1>Store Details</h1>
        

<Table dataSource={data} columns={columns}  />
    </div>
)
}
export default StoreDetails;
