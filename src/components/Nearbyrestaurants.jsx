import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "../CSS/nearby.css";

const Nearbyrestaurants = () => {
  return (
    <div>
      <div className="nearby-main">
        <Row className="nearbytwo">
          <Col md={6}>
            <Container>
              <img src="images/nearbyside.webp" className="nearby-side"></img>
            </Container>
          </Col>

          <Col md={6}>
            <div className="nearby-parent">
              <div className="nearby-child">
                <h2 className="nearby-heading">Near by Restaurants</h2>
              </div>
              <div className="d-flex justify-content-start btn-nearby-parent">
                {" "}
                <button className="btn-nearby"> Discover More</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Nearbyrestaurants;
