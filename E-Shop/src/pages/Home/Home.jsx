import React from 'react'

import Herosection from '../../components/Herosection/Herosection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProduct from '../../components/PopularProduct/PopularProduct'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = ({AddToCart}) => {
  return (
    <>
        <Herosection/>
        <Service/>
        <PopularProduct AddToCart={AddToCart}/>
        <Gallery/>
        <Testimonial/>
    </>
  )
}

export default Home