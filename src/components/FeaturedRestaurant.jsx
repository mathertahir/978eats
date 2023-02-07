import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "../CSS/featuredrestaurant.css";

const FeaturedRestaurant = () => {
  return (
    <div>
<Container className='featured-main' >
  <Row>
    <Col md={7}>
<div className='feature-heading'>
  <img src='images/res.webp' className='feature-image'></img> 
 <h2 className='featured '>Featured Restarants</h2>
 <button className="btn btn-custom ">Discover More</button>

 </div>
  
      
       </Col>
    
    <Col md={5}> Card Tags</Col>
</Row>




</Container>
    </div>

  )
}

export default FeaturedRestaurant