import React, { useEffect } from 'react'
import Slider from '../template/slider'
import Process from '../component/process'
import Hire from '../component/hire'
import Service from '../component/service'
import Portfolio from '../component/portfolio'
const Home = () => {

  useEffect(() => {
    document.title = 'Home | Swasthik Technology';
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
     <Slider />
     <Process />
     <Hire />
     <Service />
     <Portfolio />
    </>
   
  )
}

export default Home