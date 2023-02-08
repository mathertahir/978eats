import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/touchus.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Touchus = () => {
  return (
    <Container>
      <div className="touchus-main">
        <Row>
          <Col md={12}>
            <div className="contactus">
              <h1 className="contact-heading">Get in Touchwith us</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={6}>
                {" "}
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Form>
              </Col>

            </Row>
            <Row>
                <Col md={12}>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
                </Form>

                </Col>

            </Row>
            <Row>
                <Col md={3}>
                    <Button className="contact-button">
                     SEND MESSAGE
                    </Button>
                </Col>
            </Row>
          </Col>
          <Col md={4}> 
          <Container><img src="images/contactside.webp" className="contact-side-image"></img></Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Touchus;
