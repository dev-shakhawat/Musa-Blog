import React from 'react'
import { Outlet } from 'react-router'
import Nav from './nav/Nav'
import Footer from './footer/Footer'

export default function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
