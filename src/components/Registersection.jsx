import React from 'react'
import { Container } from 'react-bootstrap'
import "../CSS/registersection.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Registersection = () => {
  return (
    <div >

<Container fluid  className='register-background' >
      <Row>     
        <Col >
            <div className='register-image' >
             <h1 className='register-heading'>Register Restaurants</h1>
            </div>
        </Col>   
      </Row>
    </Container>
<div fluid  className='register-downside'>
  <Row> 
    <Col>
 <div className='register-banner'>
    
<div className='register-button-section'>
<button className=" btn-discover ">Discover More</button>
<button className=" btn-discover ">Discover More</button>
</div>
 </div>
 </Col>
 </Row> 
</div>
    
       </div>
    
  )
}

export default Registersection