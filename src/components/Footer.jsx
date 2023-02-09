import React from 'react'
import { Container } from 'react-bootstrap'
import "../CSS/footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className='footer-main'>
<Container>
<Row>
    <Col md={12}>
    <div className='footer-main-logo '>
        <span className='footer-parent'><img src='images/footerlogo.svg' className='footerlogo'></img></span>

    </div>
    <div className='footer-menu'>
      <ul className='footer-item'>
        <li className='address'> 225 Brosdway, Methuen, Massachusetts 01844</li>
        <li>Support@978eats.com</li>
        <li > |  Terms and Conditions</li>
        <li>|  Privacy</li>
        <li>|  Driver Contact</li>
      </ul>

    </div>
    </Col>
</Row>

</Container>
        


    </div>
  )
}

export default Footer