import React from 'react'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Topbar/>
    <Outlet/>
    </>
  )
}

export default Layout
