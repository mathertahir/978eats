import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "../CSS/featuredrestaurant.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FeaturedRestaurant = () => {
  return (
    <div>
<Container className='featured-main' >
  <Row>
    <Col md={7}>
<div className='feature-heading'>
  <img src='images/res.webp' className='feature-image'></img> 
 <h2 className='featured '>Featured Restaurants</h2>
 <button className=" btn-discover">Discover More</button>

 </div>
  
      
       </Col>
    
    <Col md={5}>
      <div className='card-sections'>
    <Card style={{ width: '100%' }}>
      <Card.Img  src="images/card1.webp" />
      <Card.Body>
        <ul>
     <li>Sauce</li>
     <li>Sauce</li>
     <li>Sauce</li>
     </ul>

        <Card.Title>La Cocina De Arismendy</Card.Title>
        <Card.Text>
        592 Essex St, Lawrence, MA 01840, USA
        <div className='d-flex'>
<span className='bottom-card'>5.0</span>
<span className='bottom-card'>1k</span>
       </div>
        </Card.Text>
  
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="images/card1.webp" />
      <Card.Body>
        <ul>
     <li>Sauce</li>
     <li>Sauce</li>
     <li>Sauce</li>
     </ul>

        <Card.Title>La Cocina De Arismendy</Card.Title>
        <Card.Text>
        592 Essex St, Lawrence, MA 01840, USA
        <div className='d-flex'>
<span className='bottom-card'>5.0</span>
<span className='bottom-card'>1k</span>
       </div>
        </Card.Text>
      
      </Card.Body>
    </Card>

    </div>
    </Col>
</Row>




</Container>
    </div>

  )
}

export default FeaturedRestaurant