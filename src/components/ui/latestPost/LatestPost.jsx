import React, { useEffect, useState } from 'react'
import colorSchema from '../../../assets/colorSchema'
import PostCard from '../../common/PostDetails'
import { Link } from 'react-router'
import NoPost from '../../common/NoPost'

export default function LatestPost() {

    const color = colorSchema()
    const [allPosts, setAllPosts] = useState([]); 
    
 
      
 

  return (
    <div className='   px-2   '>
        
        <h2 style={{color: color.textprimary}}  className='font-work-sans font-bold text-[24px] leading-7   '>Latest Post</h2>


 
        {/* latest post */}
        { allPosts.length > 0? <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10  ">
              {allPosts.map((item, index) => {
                return <PostCard description={item?.description} postId={item?.slug} key={index} postername={item?.author?.displayName} postdate={item?.publishedAt} tag={item?.category} title={item?.title}    blogImage={item?.featuredImage} posterimage={item?.author?.photoURL}    />
              })}
        </div> : <NoPost sms="No Post Found" />}
        

        {/* button load */}
        <div className="flex justify-center md:mt-10 mt-7 ">
            <Link style={{color: color.textprimary}} to={`/blogs`} type="button" className=' py-3 px-5 rounded-[6px] border-2 border-gray-200 font-work-sans font-medium text-base leading-6   ' >View All Post</Link>
        </div>

    </div>
  )
}