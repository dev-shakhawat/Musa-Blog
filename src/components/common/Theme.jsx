import React, { useEffect, useRef, useState } from 'react'

// icons
import { IoSettingsOutline } from "react-icons/io5";  
import { GoSun } from "react-icons/go";
import { RxFontFamily } from "react-icons/rx";
import { AiOutlineFontSize } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import AllThemes from './AllThemes';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { settingStatus } from '../../redux/navSlice';
import colorSchema from '../../assets/colorSchema'; 


export default function Theme() {
  
  const dispatch = useDispatch();
  const color = colorSchema();
  const cartRef = useRef(null);
  const setting = useSelector((state) => state.nav.setting);
  const [selectedtab, setSelectedtab] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) { 
        const settingsButton = event.target.closest(`button[type="button"]`);
        if (!settingsButton || !settingsButton.contains(event.target)) {
          dispatch(settingStatus(false));
        }
      }
    };

    if (setting) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setting, dispatch]);


  return (
      <div ref={cartRef} className='mt-1.5 '>
         <button style={{color: color.textprimary}} onClick={()=> dispatch(settingStatus(!setting))} type="button"className='text-2xl'><IoSettingsOutline/></button>
         

         {/* theme cart */}
         <div   style={{background: color.bgprimary ,  border: `1px solid ${color.border}` }} className={`${setting ? "right-0" : "-right-100"} transition-all duration-300 w-80 z-10 rounded-[10px] p-5 absolute top-12`}>
        <div style={{borderBottom: `1px solid ${color.border}` }} className='flex items-center gap-2   pb-2    ' >
            {selectedtab && <button style={{color: color.textprimary}} onClick={()=> setSelectedtab("")} type="button" className='cursor-pointer    text-xl ' ><IoArrowBack/></button>}
            <span style={{color: color.textprimary}} className='font-ubuntu font-medium text-2xl leading-6    cursor-pointer select-none capitalize '>{!selectedtab ? "Setting" : selectedtab}</span>
        </div> 


        {/* buttons */}
        {!selectedtab && 
        <div style={{color: color.textprimary}} className="flex flex-col gap-2 mt-2  ">

            <button onClick={()=> setSelectedtab("theme")} type="button" className='cursor-pointer text-xl w-full text-start flex items-center gap-2      '  >
                <GoSun/>
                <span>Theme</span>
            </button>

            <button onClick={()=> setSelectedtab("font")} type="button" className='cursor-pointer text-xl w-full text-start flex items-center gap-2      '  >
                <RxFontFamily/>
                <span>Font</span>
            </button>

            <button onClick={()=> setSelectedtab("Font Size")} type="button" className='cursor-pointer text-xl w-full text-start flex items-center gap-2      '  >
                <AiOutlineFontSize/>
                <span>Font Size</span>
            </button>

        </div> }

        {selectedtab === "theme" &&  <AllThemes/>}

        </div>
      </div>
  )
}
