import React, { useState } from "react";
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
import LeftNavbar from "./LeftNavBar";
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
  <LeftNavbar leftNavbar={leftNavbar} data={data} setLeftNavbar={setLeftNavbar}/>
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