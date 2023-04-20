import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserLayout from './UserLayout'
import UDashboard from './UDashboard'
import AddLand from './AddLand'
import Approve from './Approve'
import MyLands from './MyLands'
import RequestLand from './RequestLand'

export default function UserIndex() {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<UDashboard />} />
            <Route path='addland' element={<AddLand />} />
            <Route path='mylands' element={<MyLands />} />
            <Route path='requestland' element={<RequestLand />} />
            <Route path='Approve' element={<Approve />} />
          </Route>
        </Routes>

    </div>
  )
}