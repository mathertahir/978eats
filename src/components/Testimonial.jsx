import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "../CSS/testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-main">
      <Container>
        <Row>
          <Col className="testimonial-head">
            <Container>
              <div className="testimonial-background py-0 my-lg-4 mb-0">
                <h1 className="testimonial-heading  text-center">
                  What our client Say
                </h1>
              </div>
            </Container>
          </Col>
          <Row>
            <Col md={6}>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>

                          <h6>Eduard Franz</h6>
                        </div>
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>

                          <h6>Eduard Franz</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>

                          <h6>Eduard Franz</h6>
                        </div>
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>

                          <h6>Eduard Franz</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>
                          <h6>Eduard Franz</h6>
                        </div>
                        <div className="col-sm">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren."
                          </p>
                          <h6>Eduard Franz</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="button"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="button"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Container>
                <img
                  src="images/testimonialgroup.webp"
                  className="nearby-side"
                ></img>
              </Container>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
