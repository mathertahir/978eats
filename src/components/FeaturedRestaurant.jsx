import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "../CSS/featuredrestaurant.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const FeaturedRestaurant = () => {
  return (
    <div>
      <Container className="featured-main">
        <Row className="card-parents">
          <Col lg={6} className="card-heading">
            <div className="feature-background">
              <h2 className="featured ">Featured Restaurants</h2>
            </div>
            <button className=" btn-discover">Discover More</button>
          </Col>

          <Col lg={6}>
            <Row className="child-card">
              <Col sm={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img src="images/card1.webp" />
                  <Card.Body>
                    <ul>
                      <li>Sauce</li>
                      <li>Sauce</li>
                      <li>Sauce</li>
                    </ul>

                    <Card.Title>La Cocina De Arismendy</Card.Title>
                    <Card.Text>
                      592 Essex St, Lawrence, MA 01840, USA
                      <div className="d-flex">
                        <span className="bottom-card">5.0</span>
                        <span className="bottom-card">1k</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img src="images/card1.webp" />
                  <Card.Body>
                    <ul>
                      <li>Sauce</li>
                      <li>Sauce</li>
                      <li>Sauce</li>
                    </ul>

                    <Card.Title>La Cocina De Arismendy</Card.Title>
                    <Card.Text>
                      592 Essex St, Lawrence, MA 01840, USA
                      <div className="d-flex">
                        <span className="bottom-card">5.0</span>
                        <span className="bottom-card">1k</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedRestaurant;
