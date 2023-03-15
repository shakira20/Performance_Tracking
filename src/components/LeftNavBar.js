import React from "react";
import {Layout, Avatar, Menu, Icon, Breadcrumb, Button} from 'antd';
import { Link, useNavigate } from "react-router-dom";

const LeftNavbar = ({
    leftNavbar,
    data,setLeftNavbar
}) =>{
    function changesleftnavbar (name)  {
        setLeftNavbar(name);
       
  }
    return (
  <div data-testid='menu'>
    <Menu
      defaultSelectedKeys={['Dashboard']}
      selectedKeys={leftNavbar}
      mode="inline"
      onClick={({key})=>{changesleftnavbar(key)}}
    >
      <Menu.Item key='Dashboard'>
        Dashboard
    </Menu.Item>
    {data && data[0]?.role === 'Admin' &&<Menu.Item key='Employee List'>
    Employee List
    </Menu.Item>}
    <Menu.Item key='Product Details'>
        Product Details
    </Menu.Item>
    {data && data[0]?.role === 'Admin' && <Menu.Item key='Add Employee'>
    Add Employee
    </Menu.Item>}
    {data && data[0]?.role === 'Admin' && <Menu.Item key='Add Store'>
    Add Store
    </Menu.Item>}
    {data && data[0]?.role !== 'Admin' &&<Menu.Item key='Daily Tracking'>
    Daily Tracking
    </Menu.Item>}
    <Menu.Item key='Performances'>
    Performances
    </Menu.Item>  
      
    </Menu>
  </div>  
)
};

export default LeftNavbar;