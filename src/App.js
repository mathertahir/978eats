import React from 'react'
import Topnavs from './components/Topnavs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Upperbanner from './components/Upperbanner';
import Bikeanimation from './components/Bikeanimation';
import FeaturedRestaurant from './components/FeaturedRestaurant';


const App = () => {
  return (
    <div><Topnavs/>
    <Upperbanner/>
   <Bikeanimation/>
   <FeaturedRestaurant/>
    </div>
  
  )
}

export default App