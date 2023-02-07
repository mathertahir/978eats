import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "../CSS/nearby.css"

const Nearbyrestaurants = () => {
  return (
    <div>
        <div className='nearby-main'>
<Container>
<Row className='nearbytwo'>
    <Col md={6}>
    <Container><img src='images/nearbyside.webp' className='nearby-side'></img></Container>
    </Col>

    <Col md={6}>

    <div className='feature-heading'>
  <img src='images/nearby.webp' className='feature-image'></img> 
 <h2 className='nearby '>Featured Restaurants</h2>
 <button className=" btn-nearby">Discover More</button>

 </div>
    </Col>
</Row>
</Container>
</div>
        
    </div>
  )
}

export default Nearbyrestaurants