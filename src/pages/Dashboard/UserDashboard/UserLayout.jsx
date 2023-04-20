import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function UserLayout() {
  return (
    <div className='flex flex-row bg-neutral h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex-1'>
        <div className='p-4'>{<Outlet />}</div>
        </div>  
    </div>
  )
}
