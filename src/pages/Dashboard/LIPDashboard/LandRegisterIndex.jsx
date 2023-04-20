// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './Dashboard'
import VerifyLand from './VerifyLand'
import TransferOwnership from './TransferOwnership'

export default function LandRegisterIndex() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            {/* <Route path='verifyuser' element={<VerifyUser />} /> */}
            {/* <Route path='verifyland' element={<VerifyLand />} />
            <Route path='transferownership' element={<TransferOwnership />} /> */}
          </Route>
        </Routes>
      {/* </Router> */}
    </div>
  )
}