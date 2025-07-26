import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { IoClose } from "react-icons/io5";


export default function NavSearch({className}) {

    const [search , setSearch] = useState('')

  return (
    <div className={`${className} flex items-center   `}>
        
        <button type="button"><LuSearch/></button>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='px-2 py-1  outline-0 flex-1    ' placeholder='Search...' />
 
        {search && <button onClick={()=> setSearch('')} type="button" className='cursor-pointer'><IoClose/></button>}

    </div>
  )
}
