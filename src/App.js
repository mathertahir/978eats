import React from 'react'
import Topnavs from './components/Topnavs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Upperbanner from './components/Upperbanner';
import Bikeanimation from './components/Bikeanimation';
import FeaturedRestaurant from './components/FeaturedRestaurant';
import Registersection from './components/Registersection';
import Nearbyrestaurants from './components/Nearbyrestaurants';
import Testimonial from './components/Testimonial';
import Family from './components/Family';


const App = () => {
  return (
    <div>
      <Topnavs/>
    <Upperbanner/>
   <Bikeanimation/>
   <FeaturedRestaurant/>
    <Registersection/>
    <Nearbyrestaurants/>
    <Testimonial/>
    <Family/>



    </div>
  
  )
}

export default App