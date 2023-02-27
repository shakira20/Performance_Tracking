import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from "./components/Profile"


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<LoginPage/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
         
      
    </div>
  );
}

export default App;
