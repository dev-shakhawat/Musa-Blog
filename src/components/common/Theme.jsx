import React, { useEffect, useState } from 'react'
import { TbSunHigh } from "react-icons/tb";


export default function Theme() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);


  return (
    <div>
      <button type="button"className='text-black text-2xl'><TbSunHigh/></button>
    </div>
  )
}
