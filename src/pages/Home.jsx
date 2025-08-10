import React from 'react'
import Banner from '../components/ui/banner/Banner'
import LatestPost from '../components/ui/latestPost/LatestPost' 
import Container from '../components/common/Container'
export default function Home() {

  
  
  return (
    <div   className='pb-10 pt-18 '>

      <Container>
      
      {/* banner */}
      <Banner/>


      {/* latest post */}
      <LatestPost/>

      </Container>


    </div>
  )
}
