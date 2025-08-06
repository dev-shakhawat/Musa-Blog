import React from 'react'
import { Link } from 'react-router'
import { HiOutlineDotsVertical } from "react-icons/hi";
import colorSchema from "../../assets/colorSchema"

export default function PostCard({img , tag , blogerPic , blogerName = "Tracey Wilson" , postDate = "August 20, 2022"}) { 

  const color = colorSchema();

  return (
    <div style={{border :  `1px solid ${color.border}  `}} className=' rounded-[12px] p-4  shadow-md   '>
        {img ? <img src="" alt="" className='rounded-[12px] '/> : <div  className='h-[240px] bg-gray-400 rounded-[12px]'></div>}

        {/* post details */}
        <div className="mt-4 p-2  ">

            <p className=" bg-[#4B6BFB]/5 py-1 px-2.5  rounded-[6px] w-fit text-[#4B6BFB] font-ubuntu font-medium text-sm  ">{tag}</p>
            

            {/* title */}
            <Link style={{color: color.textprimary}} className={`mt-4  line-clamp-2 text-ellipsis font-ubuntu font-bold text-xl   `}>
               The Impact of Technology on the Workplace: How Technology is Changing 
            </Link>

            {/* bloger profile */}
            <div className="flex items-center justify-between mt-5   ">
                <div className="flex items-center gap-5">
                    {blogerPic ? <img src="" alt="" /> :
                    <div className=' w-9 h-9 rounded-[10px] bg-gray-200    '></div>}

                    {blogerName && <p className=' font-ubuntu font-medium text-base leading-6 text-[#97989F]   '>{blogerName}</p>}
                    -
                    {postDate && <p className=' font-ubuntu font-medium text-base leading-6 text-[#97989F]   '>{postDate}</p>}
                </div>
                <button type="button" className='text-xl text-[#97989F]  ' ><HiOutlineDotsVertical/></button>

            </div>

        </div>
    </div>
  )
}
