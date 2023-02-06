import React from 'react'
import Topnavs from './components/Topnavs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Upperbanner from './components/Upperbanner';
import Bikeanimation from './components/Bikeanimation';


const App = () => {
  return (
    <div><Topnavs/>
    <Upperbanner/>
   <Bikeanimation/>
    </div>
  
  )
}

export default App