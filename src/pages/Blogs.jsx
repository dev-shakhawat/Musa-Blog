import React, { useEffect, useState } from 'react'
import Container from '../components/common/Container'
import Banner from '../components/ui/banner/Banner'
import PostDetails from '../components/common/PostDetails'
import BlogBanner from '../components/ui/banner/BlogBanner'
import PostCard from '../components/common/PostCard'
import NoPost from '../components/common/NoPost'

export default function Blogs() {


  const [allblogs, setAllblogs] = useState([]);




  return (
    <div className='xl:pt-30 lg:pt-20 md:pt-15 sm:pt-10 pt-8   '>
      <Container>

        {/* blog banner */}
        <BlogBanner tag="technology" title={`The Impact of Technology on the Workplace: How Technology is Changing` } postername="John Doe" postdate="March 12, 2023"  />


        {/* all blogs */}
        {allblogs.length > 0 ?<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10  ">

           {allblogs.map((item, index) => {
              return  <PostCard description={item?.description} postId={item?.slug} key={index} postername={item?.author?.displayName} postdate={item?.publishedAt} tag={item?.category} title={item?.title}    blogImage={item?.featuredImage} posterimage={item?.author?.photoURL}    />
          })}

        </div> : <NoPost sms="No Blogs Found"  />}




      </Container>
    </div>
  )
}