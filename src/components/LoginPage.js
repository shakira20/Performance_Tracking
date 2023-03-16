import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input,Button,Layout,Select  } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Typography } from '@mui/material';
import {login_password,login_username}from './FormValidation'

const LoginPage = () =>{
const navigate = useNavigate();
const [value,setValue]=useState('');
const [role,setRole]=useState('');
const [pass,setPass] =useState('');
const[disabled,setDisabled]=useState(false);
console.log(login_username,'form')
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
  let dataSource;
  useEffect(()=>{
    fetch("https://mocki.io/v1/7969c5d4-dbc7-4d90-adfb-0198ae4c48c6")
    .then(res => res.json())
    .then(
      (result) => {
        dataSource=result.dataSource;
        console.log(result,'api')
      },)
  },[])
  useEffect(()=>{
    if(user.username)
    {
    if(user.role && user.role === 'Employee')
    {
  const userData = employees?employees?.filter((item)=>item.name.toLowerCase() === user.username.toLowerCase() && item.userType.toLowerCase() === user.role.toLowerCase()):dataSource?.filter((item)=>item.name.toLowerCase() === user.username.toLowerCase() && item.userType.toLowerCase() === user.role.toLowerCase());
  // console.log(userData,'data');
  if(userData?.length)
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
  },[user])
// console.log(user,'log')
  sessionStorage.setItem("login_user",JSON.stringify(user));
  // console.log(value,role,disabled);
return (

    <div data-testid='login'>
        
<div style={{marginTop:'150px'}}>
    <center>
      <h3 style={{color:'blue'}}>Login</h3>
    <Form style={{marginLeft:'70px'}}>
    <fieldset style={{width:'500px',alignContent:'center'}}>
        <br/>
            <Form.Item  name="enter user name" rules={login_username}>
                <Input placeholder='enter user name' style={{ width: 450,marginRight:'125px' }} onChange={onChanging}></Input>
            </Form.Item >
            <Form.Item  name="enter password"  rules={login_password}>
                <Input.Password placeholder='enter password' style={{ width: 450,marginRight:'125px' }} onChange={(e)=>setPass(e.target.value)}></Input.Password>
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
                <Button block type="primary" htmlType='submit' style={{width:'150px',marginRight:'58px'}} onClick={()=>navigate('/dashboard',{state:data})} disabled={value&&role&&pass&&!disabled?false:true}> Login
                </Button></Form.Item>
                </fieldset>
            </Form>
            </center>
            </div>
</div>
 );
}
 export default LoginPage;