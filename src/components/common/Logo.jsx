import React from 'react'
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router';

export default function Logo({menu = true}) {
  return (
    <div className="flex gap-2">
        { menu && <button type="button" className='text-3xl cursor-pointer ' ><TbMenu2/></button>}

      <Link to={`/`} className=' text-3xl font-semibold   '>
       Meta Blog
      </Link>
                
    </div>
  )
}
