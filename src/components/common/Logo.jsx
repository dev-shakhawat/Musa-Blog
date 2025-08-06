// react
import React from 'react'
import { Link } from 'react-router';

// redux
import { useDispatch } from 'react-redux';
import { drawerStatus } from '../../redux/navSlice';

// icons
import { TbMenu2 } from "react-icons/tb";
import colorSchema from '../../assets/colorSchema';

export default function Logo({menu = true}) {

    const dispatch = useDispatch();
    const color = colorSchema();

  return (
    <div  style={{color: color.textprimary}} className="flex gap-2">
        { menu && <button onClick={() => dispatch(drawerStatus())} type="button" className='text-3xl cursor-pointer ' ><TbMenu2/></button>}

      <Link to={`/`} className=' text-3xl font-semibold   '>
       Meta Blog
      </Link>
            
    </div>
  )
}
