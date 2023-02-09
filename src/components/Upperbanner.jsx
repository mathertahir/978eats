import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../CSS/upperbanner.css";

const Upperbanner = () => {
  return (
    <>
      <Container className="upperbanner-container">
        <Row>
          <Col md={7}>
            <div className="upper-banner-heading">
              <h1 className="hungry">Hungry?</h1>
              <h4 className="favourite">Order from your Favourite</h4>
              <h1 className="local-restaurants">Local Restaurants</h1>
            </div>

            <div className="dropdown-container">
              <div>
                {" "}
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <div class="vr"></div>
                </select>
              </div>
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <div class="vr"></div>
                </select>
              </div>
              <div>
                <button type="submit" class="  btn btn-banner  mb-2">
                  Find Food
                </button>
              </div>
            </div>

            <p className="banner-des">
              Whether ordering ahead or for delivery, here you will find the
              best restaurants the 978 area has to offer.
            </p>
          </Col>
          <Col md={5} className="text-center">
            <img
              src="images/upperbannerlogo.svg"
              className="upper-banner-image "
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Upperbanner;
