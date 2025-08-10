// react
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { drawerStatus } from '../../redux/navSlice';

// icons
import { TbMenu2 } from "react-icons/tb";
import colorSchema from '../../assets/colorSchema';
import Drawer from './Drawer';

export default function Logo({menu = true }) {

    const dispatch = useDispatch();
    const color = colorSchema();
    
    const menuBtnRef = useRef(null);
    const drawerRef = useRef(null);
    const drawer = useSelector((state) => state.nav.drawer); 
    
    useEffect(() => {
      const outsideClick = (event) => {
        const isClickInsideDrawer =
          drawerRef.current && drawerRef.current.contains(event.target);
    
        const isClickOnMenuBtn =
          menuBtnRef.current && menuBtnRef.current.contains(event.target);
    
        if (!isClickInsideDrawer && !isClickOnMenuBtn) {
          dispatch(drawerStatus(false));
        }
      };
    
      document.addEventListener('click', outsideClick);
      return () => document.removeEventListener('click', outsideClick);
    }, []);


    const handleButtonClick = (e) => {
      e.stopPropagation();
      dispatch(drawerStatus(!drawer));
    };


  return (
    <div  style={{color: color.textprimary}} className="flex gap-2">
        { menu && <button ref={menuBtnRef} onClick={handleButtonClick} type="button" className='text-3xl cursor-pointer ' ><TbMenu2/></button>}

      <Link to={`/`} className=' text-3xl font-semibold   '>
       Meta Blog
      </Link>


      <Drawer ref={drawerRef}/>
            
    </div>
  )
}
