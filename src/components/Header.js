import React from "react";
import {Layout, Avatar, Menu, Icon, Breadcrumb, Button} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined,DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Title from 'antd/lib/typography/Title';

const Header = () => {
    const { Header } = Layout;
      const data= JSON.parse(sessionStorage.getItem("login_user"));
      console.log(data,'data')
    const items= [
        {
          key: '1',
          label: (
          <a target="_blank" href='/'>Sign Out</a>
          ),
    
        },
        
      ];
    return (
        <div>
        
<Header style={{ padding: 10 ,height:'100px'}}>
  <div  style={{ float: 'right' ,paddingLeft:'100px'}}>
  
{data && <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
<p style={{ color: 'white' }}>{data.username}</p>
      <Avatar  size={40} icon={<UserOutlined  />} /><br/>
      </Space>
    </a>
  </Dropdown>}
  </div> 
  <Title style={{ color: 'white' }} level={3}>Retail Store Employee Performance Tracking System</Title>
</Header>

        </div>
    )
}

export default Header;