import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../CSS/upperbanner.css"

const Upperbanner = () => {
  return (
    <>
 <Container className='upperbanner-container'>
      <Row>
        <Col md={7}>
            <div>
                <h1 className='hungry'>Hungry?</h1>
                <h4 className='favourite'>Order from your Favourite</h4>
                <h1 className='local-restaurants'>Local Restaurants</h1>
            </div>
               
               <div className='dropdown-container'>
          <div>  <Dropdown as={ButtonGroup} className="dropdown-main">
      <Button className='upperbanner-dropdown' >Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  <div>
    <Dropdown as={ButtonGroup} className="dropdown-main">
      <Button className='upperbanner-dropdown'  >Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
<div>
    <button className="btn btn-custom ">Ceate A Business</button>
    </div>
               </div>
           
           <p>Whether ordering ahead or for delivery, here you will find the best restaurants the 978 area has to offer.</p>
            
        </Col>
    <Col md={5}><Container><img src='images/upperbannerlogo.svg' className='upper-banner-image'></img></Container></Col>
      </Row>
    </Container>
    </>
  )
}

export default Upperbanner