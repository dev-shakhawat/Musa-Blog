import React from 'react'
import Banner from '../components/ui/banner/Banner'
import LatestPost from '../components/ui/latestPost/LatestPost'

export default function Home() {
  return (
    <div className='pb-10'>
      
      {/* banner */}
      <Banner/>


      {/* latest post */}
      <LatestPost/>


    </div>
  )
}
