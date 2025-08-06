import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import colorSchema from '../../../assets/colorSchema';


export default function NavSearch({className}) {

    const [search , setSearch] = useState('')
    const color = colorSchema();

  return (
    <div style={{color: color.textprimary , border :  `1px solid ${color.border}  `}} className={`${className} flex items-center   `}>
        
        <button style={{color: color.textprimary}} type="button"><LuSearch/></button>
          <input style={{color: color.textprimary}} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='px-2 py-1  outline-0 flex-1    ' placeholder='Search...' />
 
        {search && <button style={{color: color.textprimary}} onClick={()=> setSearch('')} type="button" className='cursor-pointer'><IoClose/></button>}

    </div>
  )
}
