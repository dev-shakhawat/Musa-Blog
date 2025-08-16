import React from 'react'


// icons
import { FaCircle } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

// colors
import colorSchema from "../../assets/colorSchema"

export default function AllThemes() {

    const themes = [ "light", "dark", "system",  ]
    const selectedTheme = useSelector((state)=> state.theme.selectedTheme)
    const dispatch = useDispatch();
    const color = colorSchema();

  return (
    <div   className=' w-full grid grid-cols-1 gap-2 mt-2      '  >
        
        {themes.map((item)=> (
        <div style={{border: `1px solid ${color.border}`}} key={item} onClick={()=> dispatch({type: "theme/themeSet", payload: item})}   className='flex capitalize   cursor-pointer py-1 px-3 rounded-[6px]  items-center gap-2    '   >
            <button style={{color: color.textprimary ,    }} type="button" className='flex items-center gap-2  flex-1'>
                <FaCircle/>
                <span>{item}</span>
            </button>
            {selectedTheme === item && <IoCheckmark style={{color: color.textprimary}}/>}
        </div>
        ))}
    </div>
  )
}
