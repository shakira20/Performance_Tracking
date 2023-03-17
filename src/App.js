import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import {Layout, Avatar, Menu, Icon, Breadcrumb, Button} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import LeftNavbar from './components/LeftNavBar';
import EmployeeList from './components/employeeList';
import AddEmployee from './components/AddEmployee';
import AddStore from "./components/AddStore";
import DailyTrack from "./components/DailyTrack";
import StoreDetails from "./components/StoreDetails";
import Performances from "./components/Performances";
function App() {
  const { Sider, Content } = Layout;
  const [leftNavbar,setLeftNavbar] = useState('/dashboard');
  const [empdata,setempData] =useState({});
    const [storedata,setstoreData] =useState({});
    const[performance,setPerformance]=useState({});
    console.log(window.location.pathname,'path')

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
  return (
    <div className="App" data-testid='app'>
    <Layout>
      <Header/>
      <Layout> 
  { window.location.pathname !== "/"&&
  <Sider>
  <LeftNavbar leftNavbar={leftNavbar} setLeftNavbar={setLeftNavbar}/>
  </Sider>}
      <Layout>
        <Content style={{ padding: '0 50px' }}>
        <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<LoginPage/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/employeelist' element={<EmployeeList addEmployee={empdata}/>}/>
      <Route exact path='/addEmployee' element={<AddEmployee leftnavbar={changesleftnavbar} data={setData}/>}/>
      <Route exact path='/productDetails' element={<StoreDetails  addStore={storedata}/>}/>
      <Route exact path='/addStore' element={<AddStore leftnavbar={changesleftnavbar} product={setStore}/>}/>
      <Route exact path='/dailyTracking' element={<DailyTrack leftnavbar={changesleftnavbar} performance={setPerform}/>}/>
      <Route exact path='/Performances' element={<Performances  addData={performance}/>}/>
      </Routes>
      </BrowserRouter>
         
        </Content>
        <Footer/>
      </Layout>
    </Layout>
    </Layout>   
    </div>
  );
}
{
  /*
   {leftNavbar === 'Employee List' && <EmployeeList data={data} addEmployee={empdata} />}
       {leftNavbar === 'Add Employee' && <AddEmployee leftnavbar={changesleftnavbar} data={setData}/>}
       {leftNavbar === 'Add Store' && <AddStore leftnavbar={changesleftnavbar} product={setStore}/>}
       {leftNavbar === 'Daily Tracking' && <DailyTrack leftnavbar={changesleftnavbar} performance={setPerform}/>}
       {leftNavbar === 'Product Details' && <StoreDetails data={data} addStore={storedata}/>}
       {leftNavbar === 'Performances' && <Performances data={data} addData={performance}/>}
  */
}
export default App;
