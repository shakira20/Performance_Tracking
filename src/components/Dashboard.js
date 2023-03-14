import React, { useState } from "react";
import dailyTrack from "./DailyTrack";
import {Layout, Avatar, Menu, Icon, Breadcrumb, Button} from 'antd';
import Title from 'antd/lib/typography/Title';
import {BrowserRouter, Route, Routes, useNavigate,Switch ,useLocation, Link} from 'react-router-dom';
import AddEmployee from "./AddEmployee";
import AddStore from "./AddStore";
import DailyTrack from "./DailyTrack";
import EmployeeList from "./employeeList";
import Gragh from "./Graph";
import StoreDetails from "./StoreDetails";
import Performances from "./Performances";
import { UserOutlined,DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const Dashboard = () => {
  // const navigate =useNavigate();
  const items= [
    {
      key: '1',
      label: (
      <Link to='/'>Sign Out</Link>
      ),

    },
    
  ];
    
const location = useLocation();

    const { Header, Footer, Sider, Content } = Layout;
    const [leftNavbar,setLeftNavbar] = useState('Dashboard');
    const [empdata,setempData] =useState({});
    const [storedata,setstoreData] =useState({});
    const[performance,setPerformance]=useState({});

    function changesleftnavbar (name)  {
          setLeftNavbar(name);
    }
    function setStore (name)  {
      setstoreData(name);
}
console.log(storedata,'store')
    function setData (name)  {
      setempData(name);
      
}
function setPerform (name)  {
  setPerformance(name);
}
   
    console.log(location.state,'login');
    const data = location.state;
    
    return (

<div style={{display:'flex',flexDirection:'row'}} data-testid='dashboard'>
<Layout>
<Header style={{ padding: 10 ,height:'100px'}}>
  <div  style={{ float: 'right' ,paddingLeft:'100px'}}>
  
<Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
<p style={{ color: 'white' }}>{data[1].username}</p>
      <Avatar  size={40} icon={<UserOutlined  />} /><br/>
      </Space>
    </a>
  </Dropdown>
  </div> 
  <Title style={{ color: 'white' }} level={3}>Retail Store Employee Performance Tracking System</Title>
</Header>
<Layout>
  <Sider>
    <Menu
      defaultSelectedKeys={['Dashboard']}
      selectedKeys={leftNavbar}
      mode="inline"
      onClick={({key})=>{changesleftnavbar(key)}}
    >
      <Menu.Item key='Dashboard'>
        Dashboard
    </Menu.Item>
    {data[0].role === 'Admin' &&<Menu.Item key='Employee List'>
    Employee List
    </Menu.Item>}
    <Menu.Item key='Product Details'>
        Product Details
    </Menu.Item>
    {data[0].role === 'Admin' && <Menu.Item key='Add Employee'>
    Add Employee
    </Menu.Item>}
    {data[0].role === 'Admin' && <Menu.Item key='Add Store'>
    Add Store
    </Menu.Item>}
    {data[0].role !== 'Admin' &&<Menu.Item key='Daily Tracking'>
    Daily Tracking
    </Menu.Item>}
    {/* <Menu.Item key='History'>
    History
    </Menu.Item> */}
    <Menu.Item key='Performances'>
    Performances
    </Menu.Item>
      
      
    </Menu>
  </Sider>
  <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
       {leftNavbar === 'Dashboard'?<Breadcrumb.Item>Performance Gragh</Breadcrumb.Item>:<Breadcrumb.Item>{leftNavbar}</Breadcrumb.Item>}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
       {leftNavbar === 'Dashboard' && <Gragh/>}
       {leftNavbar === 'Employee List' && <EmployeeList data={data} addEmployee={empdata} />}
       {leftNavbar === 'Add Employee' && <AddEmployee leftnavbar={changesleftnavbar} data={setData}/>}
       {leftNavbar === 'Add Store' && <AddStore leftnavbar={changesleftnavbar} product={setStore}/>}
       {leftNavbar === 'Daily Tracking' && <DailyTrack leftnavbar={changesleftnavbar} performance={setPerform}/>}
       {leftNavbar === 'Product Details' && <StoreDetails data={data} addStore={storedata}/>}
       {leftNavbar === 'Performances' && <Performances data={data} addData={performance}/>}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Retail Store Employee Performance Tracking System created by shakira</Footer>
  </Layout>
</Layout>
</Layout>
</div>
);
}

export default Dashboard;