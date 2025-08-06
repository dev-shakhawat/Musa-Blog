import React from 'react'
import PostCard from '../../common/PostCard'
import Container from '../../common/Container'
import { Link } from 'react-router'
import colorSchema from '../../../assets/colorSchema'

export default function LatestPost() {
  const color = colorSchema()
  return (
    <Container>

        {/* post */}
        <h2  style={{color: color.textprimary}} className=' font-ubuntu font-bold text-2xl leading-7   '>Latest Post</h2>

        {/* all post */}
        <div className="grid grid-cols-3 mt-5 gap-5 ">
          {Array(9).fill(0).map((_ , index)=> (
            <PostCard key={index} tag={`Technology`}   />
          ))}

        </div>



        {/* button load */}
        <div className="flex justify-center mt-10">
            <Link style={{border : `1px solid ${color.border}`}} to={`/blogs`} type="button" className=' py-3 px-5 rounded-[6px]  font-ubuntu font-medium text-base leading-6 text-[#97989F]  ' >View All Post</Link>
        </div>
    </Container>
  )
}
