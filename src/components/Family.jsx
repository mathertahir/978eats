import React from "react";
import "../CSS/family.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Family = () => {
  return (
    <div>
      <div className="family-main pb-4">
        <div className="family-main-parent">
          <Container>
            <Row>
              <div className="pb-3 mb-3 pt-0">
                <h1 className="family-heading  m-0 text-white f-60 lh-1 text-center">
                  Become Our Family
                </h1>
              </div>
            </Row>

            <Row className="family-card-section">
              <Col md={4}>
                <Card style={{}} className="family-card card">
                  <Card.Body>
                    <div className="card-detail">
                      <img
                        src="images/bikecard.svg"
                        className="card-image"
                      ></img>
                      <h4 className="card-head">Register a Delievery Person</h4>
                      <p className="card-des">
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{}} className="family-card card">
                  <Card.Body>
                    <div className="card-detail">
                      <img src="images/shop.svg" className="card-image"></img>
                      <h4 className="card-head">Register a Restaurant</h4>
                      <p className="card-des">
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{}} className="family-card card">
                  <Card.Body>
                    <div className="card-detail">
                      <img
                        src="images/customer.svg"
                        className="card-image"
                      ></img>
                      <h4 className="card-head">Happy Customer</h4>
                      <p className="card-des">
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="family-lower">
              <Col lg={6}>
                <h5 className="checkout f-30 my-4">
                  Check Out App <br />
                  For Awesome Experience
                </h5>
                <h4 className="download">Download</h4>
                <h5 className="android">For Android & ios</h5>
                <div className="d-md-flex flex-column flex-md-row align-items-center">
                  <Button className="btn-family">
                    <span className="family-button-label">
                      <img
                        src="images/playstore.svg"
                        className="family-button-icon"
                      ></img>
                      PlayStore
                    </span>
                  </Button>
                  <Button className="btn-family">
                    <span className="family-button-label">
                      <img
                        src="images/apple.svg"
                        className="family-button-icon"
                      ></img>
                      AppleStore
                    </span>
                  </Button>
                </div>
              </Col>
              <Col lg={6}>
                <Container className="family-main-side">
                  <img
                    src="images/978image.webp"
                    className="family-main-image"
                  ></img>
                </Container>
              </Col>
            </Row>
          </Container>

          {/* <Row className='family-lower'>
        <Col md={7}>

          <div className='family-side-heading'>
            <h4 className='checkout'>Check Out App</h4>
            <h4 className='checkout'>For Awsome Experience</h4>
            <h1 className='download'>Download</h1>
            <h2 className='android'>For Android & ios</h2>
        <div>   
<Button  className='btn-family'><span className='family-button-label'><img src='images/playstore.svg' className='family-button-icon'></img>PlayStore</span></Button>
<Button  className='btn-family'><span className='family-button-label'><img src='images/apple.svg' className='family-button-icon'></img>AppleStore</span></Button>
</div> 
          </div>

        </Col>
        <Col md={5}><Container className='family-main-side'><img src='images/978image.webp' className='family-main-image'></img></Container></Col>
      </Row> */}
        </div>
      </div>
    </div>
  );
};

export default Family;
