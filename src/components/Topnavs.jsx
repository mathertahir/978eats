import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../CSS/topnavs.css";
import { FiShoppingCart } from "react-icons/fi";


const Topnavs = () => {
  return (
    <Navbar bg="white" expand="lg">
    <Container>
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
                     <   FiShoppingCart  />
                        <span  className='cart-item'>10</span>
                  </a>
                
        </Nav>
       
        <Nav ms-auto>
        <Button variant="primary" size="lg"  className='btn-custom'>
        Primary button
      </Button>{' '}
       </Nav>
       <Nav ms-auto>
        <Button variant="primary" size="lg"  className='btn-custom'>
        Primary button
      </Button>{' '}
       </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Topnavs