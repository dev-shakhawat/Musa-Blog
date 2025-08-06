import React from "react";
import Container from "../Container";
import { Link } from "react-router";
import { LuMail } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import Logo from "../Logo";
import colorSchema from "../../../assets/colorSchema";
import { useSelector } from "react-redux";

export default function Footer() {

  const color = colorSchema(); 

  return (
    <div className=" mt-25 pt-16  ">
      <Container>
        <div className="flex">
            {/* about */}
            <div className="flex-2">
                <h2 style={{color: color.textprimary}} className=" font-ubuntu font-medium text-xl    ">About</h2>
                <p style={{color: color.textprimary}} className=" font-ubuntu font-normal text-base text-[#696A75] mt-6 w-3/4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>


                <ul style={{color: color.textprimary}} className="flex flex-col  mt-10  ">
                    <li className="flex items-center text-[18px] gap-1 ">
                        <span className="font-semibold">Email: </span>
                        <Link className="font-normal" to={`mailto:info@jstemplate.net`}>info@jstemplate.net</Link>
                    </li>
                    <li className="flex items-center text-[18px] gap-1 ">
                        <span className="font-semibold">Phone: </span>
                        <Link className="font-normal" to={`mailto:info@jstemplate.net`}> 880 123 456 789</Link>
                    </li>
                </ul>
            </div>

            {/* links quick */}
            <div className="flex-1">
              <h2 style={{color: color.textprimary}} className=" font-ubuntu font-medium text-xl    ">About</h2>
              <ul style={{color: color.textprimary}} className="mt-6">
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Home</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>About</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Blog</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Home</Link></li> 
              </ul>

            </div>

            {/* category */}
            <div className="flex-1">
            <h2 style={{color: color.textprimary}} className=" font-ubuntu font-medium text-xl    ">Category</h2>
              <ul style={{color: color.textprimary}} className="mt-6">
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Lifestyle</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Technology</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Travel</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Business</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Economy</Link></li>
                <li className="font-ubuntu font-normal text-base "><Link to={``}>Sports</Link></li> 
              </ul>
            </div>

            {/* newsletter */}
            <div className="flex-2">

                <div style={{border :  `1px solid ${color.border}  ` }} className={` px-9 py-8      rounded-[10px]     `}>
                    <h2 style={{color: color.textprimary}} className=" font-ubuntu font-medium text-xl text-center ">Weekly Newsletter</h2>
                    <p style={{color: color.textprimary}} className="mt-2 font-ubuntu font-normal text-base   text-center">Get blog articles and offers via email</p>

                    <div className="mt-7.5">
                       <div style={{color: color.textprimary , border :  `1px solid ${color.border}  `}} className="flex items-center gap-2 p-2    rounded-[10px]  ">
                          <FaRegUser  className="text-xl    "/>
                          <input style={{color: color.textprimary}} type="text" placeholder="Your Name" className="flex-1 outline-0     " />
                       </div>
                       <div style={{color: color.textprimary , border :  `1px solid ${color.border}  `}} className="flex items-center gap-2 p-2 border border-gray-200 rounded-[10px] mt-2  ">
                          <LuMail className="text-xl   "/>
                          <input style={{color: color.textprimary}} type="email" placeholder="Your Email" className="flex-1 outline-0     " />
                       </div>

                    </div>

                    <button type="button" style={{background: "linear-gradient(97deg, rgba(107, 87, 255, 0.7), rgba(63, 98, 255, 0.7) 50%, rgba(0, 202, 224, 0.7))"}} className="bg-[#4B6BFB] py-3 rounded-[10px] w-full font-ubuntu font-medium text-base mt-2 text-white    "  >Subscribe</button>
                </div>
            </div>
        </div>

        <div style={{color: color.textprimary , borderTop :  `1px solid ${color.border}  ` }} className="flex items-center justify-between py-3 mt-3  "> 
               <Logo menu = {false}   />
                <p className="font-ubuntu font-normal text-base   ">© JS Template 2023. All Rights Reserved.</p>

                <ul className="flex items-center gap-5   ">
                    <li className="font-ubuntu font-normal text-base  ">
                        <Link to={'terms'}>Terms of Use</Link>
                    </li>
                    <li className="font-ubuntu font-normal text-base  ">
                        <Link to={'privacy'}>Privacy Policy</Link>
                    </li>
                </ul>
        </div>


      </Container>
    </div>
  );
}
