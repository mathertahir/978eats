import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../CSS/topnavs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from 'react';


const Topnavs = () => {
  return (
    <Navbar bg="white" expand="lg"  fixed="top">
    <Container >
      <Navbar.Brand href="#home"> <img
              src= "images/978logo.svg"
              height="45px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Cuisines</Nav.Link>
          <Nav.Link href="#home">Restaurants</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link> 

    
        </Nav>
        <Nav>
        <a href=''>
        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="icon-modify"/>
                        {/* <span  className='cart-item'>10</span> */}
                  </a>
                
        </Nav>
       
        <Nav ms-auto>
        <button className="btn btn-custom ">Ceate A Business</button>
       </Nav>
       <Nav ms-auto>
        <button className="btn btn-custom ">Ceate A Business</button>
       </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Topnavs