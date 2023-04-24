import React from 'react'
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
import Header from './Header'
import Home from './Home'
import User from './User'
import LandInspectorLogin from './LandInspectorLogin'
import {Routes,Route} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandRegisterIndex from '../Dashboard/LIPDashboard/LandRegisterIndex';
import UserIndex from '../Dashboard/UserDashboard/UserIndex';
import VerifyLand from '../Dashboard/LIPDashboard/VerifyLand';
import TransferOwnership from '../Dashboard/LIPDashboard/TransferOwnership';



export default function Index() {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
        {/* <Header /> */}
        {/* <Router> */}
        <Routes>
          <Route exact path='/' element={<div><Header /><Home /></div>}/>
          <Route path='/welcome' element={<div><Header /><Home /></div>} />


          {/* <Route path="/user" element={<User />} /> */}
          <Route path="/user/*" element={<User />} />

          <Route path="/landinspectorlogin/*" element={<LandInspectorLogin />} />
          {/* <Route path="/landInspectorDash" element={<LandRegisterIndex/>} /> */}
          <Route path="/landInspectorDash/*" element={<LandRegisterIndex/>} />


          {/* <Route path="/userDash" Component={UserIndex} /> */}
          <Route path="/userDash/*" element={<UserIndex />} />


          {/* <Route path="/verifyland" element={<VerifyLand/>} />
          <Route path="/transferownership" element={<TransferOwnership/>} /> */}

        </Routes>
        {/* </Router> */}
    </div>
  )
}