import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Upperbanner = () => {
  return (
    <>
 <Container>
      <Row>
        <Col md={7}>
            <div>
                <h1>Hungry?</h1>
                <h4>Order from your Favourite</h4>
                <h3>Local Restaurants</h3>

            </div>
        </Col>
    <Col md={5}><img src='images/978logo.svg'></img></Col>
      </Row>
    </Container>
    </>
  )
}

export default Upperbanner