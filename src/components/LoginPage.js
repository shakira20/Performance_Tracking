import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input,Button,Layout,Select  } from 'antd';
import Title from 'antd/lib/typography/Title';
import { dataSource } from '../Mock/employeeData';
import { Typography } from '@mui/material';


const LoginPage = () =>{
const navigate = useNavigate();
const [value,setValue]=useState('');
const [role,setRole]=useState('');
const[disabled,setDisabled]=useState(false);
let data=[];
const { Header, Footer, Sider, Content } = Layout;
const onChange = (value) => {
    // console.log(`selected ${value}`);
    setRole(value);
  };
  const onChanging = (e) => {
    setValue(e.target.value);

  }
  data.push({role:role});
  data.push({username:value});
  const user ={
    role:role,
    username:value
  }
  const Admin =[{
    userName:'Adam Jhon',
    userType:'Admin'
  }]
  const employees =JSON.parse(sessionStorage.getItem("employeelist"));
  useEffect(()=>{
    if(user.username)
    {
    if(user.role && user.role === 'Employee')
    {
  const userData = employees?employees?.filter((item)=>item.name.toLowerCase() === user.username.toLowerCase() && item.userType.toLowerCase() === user.role.toLowerCase()):dataSource?.filter((item)=>item.name.toLowerCase() === user.username.toLowerCase() && item.userType.toLowerCase() === user.role.toLowerCase());
  // console.log(userData,'data');
  if(!userData.length)
  {
  setDisabled(true);
  }
  else{
  setDisabled(false);

  }
}
else
{
  const userData = Admin?.filter((item)=>item.userName.toLowerCase() === user.username.toLowerCase() && item.userType.toLowerCase() === user.role.toLowerCase());
  // console.log(userData,'admin');
  if(!userData.length)
  {
  setDisabled(true);
  }
  else{
  setDisabled(false);

  }
}
    }
//   if(user.role && user.role === 'Employee'){
//     const userData = employees?employees?.filter((item)=>item.userType.toLowerCase() === user.role.toLowerCase()):dataSource?.filter((item)=>item.userType.toLowerCase() === user.role.toLowerCase());
//     console.log(userData,'role')
//     if(!userData.length)
//   {
//   setDisabled(true);
//   }
//   else{
//   setDisabled(false);

//   }
//     }
  },[user])
// console.log(user,'log')
  sessionStorage.setItem("login_user",JSON.stringify(user));
  // console.log(value,role,disabled);
return (

    <div data-testid='login'>
        <Layout>
        <Header style={{ padding: 10 ,height:'100px'}}>
  <Title style={{ color: 'white' }} level={3}>Retail Store Employee Performance Tracking System</Title>
</Header></Layout>
<div style={{marginTop:'150px'}}>
    
    <Form style={{marginLeft:'70px'}}>
            <Form.Item  name="enter user name" rules={[
              { required: true, message: 'Please enter user name!' },
              {pattern: /^[a-zA-Z ]{2,30}$/,
              message:'Please enter a valid name'
            }
              ]}>
                <Input placeholder='enter user name' style={{ width: 450,marginRight:'125px' }} onChange={onChanging}></Input>
            </Form.Item >
            <Form.Item  name="enter password"  rules={[
              { required: true, message: 'Please enter user password!' },
              {pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              message:'Please enter a password with Min 1 uppercase letter ,Min 1 lowercase letter ,Min 1 special character, Min 1 number, Min 8 characters,Max 30 characters'
            }
              ]}>
                <Input.Password placeholder='enter password' style={{ width: 450,marginRight:'125px' }}></Input.Password>
            </Form.Item>
            <Form.Item  name="enter role">
            <Select
                showSearch={false}
                placeholder="Select a role"
                optionFilterProp="children"
                onChange={onChange}
                style={{width: 450,marginRight:'125px'}}
               filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Admin',
        label: 'Admin',
      },
      {
        value: 'Employee',
        label: 'Employee',
      },
      
    ]}
  />
            </Form.Item>
            {disabled && <Typography style={{color:'red'}}>User does not exist </Typography>}
            <Form.Item>
                <Button block type="primary" htmlType='submit' style={{width:'150px'}} onClick={()=>navigate('/dashboard',{state:data})} disabled={value&&role&&!disabled?false:true}> Login
                </Button></Form.Item>
            </Form>
            </div>
</div>
 );
}
 export default LoginPage;