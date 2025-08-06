import React from 'react'
import { useSelector } from 'react-redux'

export default function Drawer() {

    const drawer = useSelector((state)=> state.nav.drawer)
    
    
  return (
    <div className={`${drawer ? "left-0" : "-left-50"}  absolute top-13 transition-all duration-300 bg-green-300     `}>Drawer</div>
  )
}
