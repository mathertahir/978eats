import React from "react";
import Topnavs from "./components/Topnavs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Upperbanner from "./components/Upperbanner";
import Bikeanimation from "./components/Bikeanimation";
import FeaturedRestaurant from "./components/FeaturedRestaurant";
import Registersection from "./components/Registersection";
import Nearbyrestaurants from "./components/Nearbyrestaurants";
import Testimonial from "./components/Testimonial";
import Family from "./components/Family";
import { Container } from "react-bootstrap";
import Touchus from "./components/Touchus";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Topnavs />
      <Upperbanner />
      <Bikeanimation />
      <FeaturedRestaurant />
      <Registersection />
      <Nearbyrestaurants />

      <Testimonial />
      <Family />
      <Touchus />
      {/* 
  
 

  
  
    <Footer/> */}
    </div>
  );
};

export default App;
