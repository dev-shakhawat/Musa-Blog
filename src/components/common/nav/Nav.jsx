import React from 'react'
import Container from '../Container'
import { Link } from 'react-router'
import Logo from '../Logo'
import NavSearch from './NavSearch'
import { TbUserCircle } from 'react-icons/tb'
import Theme from '../Theme'

export default function Nav() {

 
  return ( 
 
<div className="flex items-center justify-between p-3 shadow   ">

{/* logo */}
<Logo/>


{/* search  */}
<NavSearch  className={`flex items-center gap-2 w-[600px] overflow-hidden border  py-1 px-3 rounded-[20px] relative after:content-[''] after:absolute after:w-[1px] after:h-5 after:bg-gray-500 after:top-1/2 after:-translate-y-1/2 after:left-9 `} />

{/* login */}
<div className="flex items-center gap-5 ">

    {/* theme */}
    <Theme/>

    {/* account */}
    <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer select-none " style={{background: 'linear-gradient(97deg,#6b57ffb3,#3f62ffb3 50%,#00cae0b3)'}}>
        <TbUserCircle  className='text-white text-2xl'/>
        <span className='text-white text-xl'>Account</span>
    </div>
</div>

</div>  
  )
}
