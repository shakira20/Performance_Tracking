import React from "react";
import {Layout, Avatar, Menu, Icon, Breadcrumb, Button} from 'antd';
import { Link, useNavigate } from "react-router-dom";

const LeftNavbar = ({
    leftNavbar,
    setLeftNavbar
}) =>{
  const data= JSON.parse(sessionStorage.getItem("login_user"));
    function changesleftnavbar (name)  {
        setLeftNavbar(name);
        window.location.href=name;
      
  }
  
    return (
  <div data-testid='menu'>
   
    <Menu
      defaultSelectedKeys={['/dashboard']}
      selectedKeys={leftNavbar}
      mode="inline"
      onClick={({key})=>{changesleftnavbar(key);}}
    >
      <Menu.Item key='/dashboard'>
        Dashboard
    </Menu.Item>
    {data && data?.role === 'Admin' &&<Menu.Item key='/employeelist'>
    Employee List
    </Menu.Item>}
    <Menu.Item key='/productDetails'>
        Product Details
    </Menu.Item>
    {data && data?.role === 'Admin' && <Menu.Item key='/addEmployee'>
    Add Employee
    </Menu.Item>}
    {data && data?.role === 'Admin' && <Menu.Item key='/addStore'>
    Add Store
    </Menu.Item>}
    {data && data?.role !== 'Admin' &&<Menu.Item key='/dailyTracking'>
    Daily Tracking
    </Menu.Item>}
    <Menu.Item key='/Performances'>
    Performances
    </Menu.Item>     
    </Menu>

  </div>  
)
};

export default LeftNavbar;