import React from 'react' 

// component
import Logo from '../Logo'
import NavSearch from './NavSearch'
import Theme from '../Theme'
import Drawer from '../Drawer'

// icons
import { TbUserCircle } from 'react-icons/tb'
import colorSchema from '../../../assets/colorSchema'

 


export default function Nav() {

  const color = colorSchema();
 
  return ( 
 
  <nav style={{background: color.bgprimary , borderBottom : `1px solid ${color.border} `}} className='fixed top-0 left-0 w-full z-10   '>
    <div className="flex items-center justify-between p-3 shadow  relative   ">
      <Drawer/>

    {/* logo */}
    <Logo/>


    {/* search  */}
    <NavSearch  className={`flex items-center gap-2 w-[600px]      py-1 px-3 rounded-[20px] relative after:content-[''] after:absolute after:w-[1px] after:h-5 after:bg-gray-500 after:top-1/2 after:-translate-y-1/2 after:left-9 `} />

    {/* login */}
    <div className="flex items-center gap-5 relative ">

        {/* theme */}
        <Theme/>

        {/* account */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer select-none " style={{background: 'linear-gradient(97deg,#6b57ffb3,#3f62ffb3 50%,#00cae0b3)'}}>
            <TbUserCircle  className='text-white text-2xl'/>
            <span className='text-white text-xl'>Account</span>
        </div>
    </div>

    </div>  
  </nav>
  )
}
