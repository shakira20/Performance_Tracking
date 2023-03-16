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
import Header from "./Header";
import Footer from "./Footer";
const Dashboard = () => {
  // const navigate =useNavigate();
  
    
// const location = useLocation();

    const { Sider, Content } = Layout;
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
   
    // console.log(location.state,'login');
    // const data = location.state;
    
    return (

<div style={{ background: '#fff', padding: 24, minHeight: 580 }} data-testid='dashboard'>
   
      <Breadcrumb style={{ margin: '16px 0' }}>
       <Breadcrumb.Item>Performance Gragh</Breadcrumb.Item>
      </Breadcrumb>
       <Gragh/>
  
</div>
);
}

export default Dashboard;