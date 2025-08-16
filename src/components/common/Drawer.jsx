import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

import { GoHome } from "react-icons/go";
import { PiArticleMediumFill, PiHeadphonesThin } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
import colorSchema from '../../assets/colorSchema';

  const Drawer = forwardRef((props, ref) => {
  const drawer = useSelector((state) => state.nav.drawer);
  const color = colorSchema();

  return (
    <div
    style={{background: color.bgprimary , borderRight : `1px solid ${color.border} ` , borderTop : `1px solid ${color.border} ` , borderBottom : `1px solid ${color.border} `}}
      ref={ref}
      className={`${drawer ? "left-0" : "-left-60"} w-2/15 absolute top-17 h-screen transition-all duration-300 rounded-tr-[10px] rounded-br-[10px] `}
    >
      <Link to={`/`} className={` flex items-center gap-2 pl-3 pr-10 hover:bg-secondary/15 py-1 text-xl     `} style={{ color: color.textprimary   }} ><GoHome /><span>Home</span></Link>
      <Link to={`/blogs`} className={` flex items-center gap-2 pl-3 pr-10 hover:bg-secondary/15 py-1 text-xl    `} style={{ color: color.textprimary   }} ><PiArticleMediumFill /><span>All Blogs</span></Link>
      <Link to={`/contact`} className={` flex items-center gap-2 pl-3 pr-10 hover:bg-secondary/15 py-1 text-xl    `} style={{ color: color.textprimary   }} ><PiHeadphonesThin /><span>Contact</span></Link>
      <Link to={`/profile`} className={` flex items-center gap-2 pl-3 pr-10 hover:bg-secondary/15 py-1 text-xl    `} style={{ color: color.textprimary   }} ><BsFillShieldLockFill /><span>Profile</span></Link>
    </div>
  );
});

export default Drawer;
