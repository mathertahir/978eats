import React from "react";
import { Container } from "react-bootstrap";
import "../CSS/footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <Container>
          <Row>
            <Col>
              <div className="footer-main-logo  text-center pt-5 pb-5">
                <span className="footer-parent">
                  <img src="images/footerlogo.svg" className="footerlogo"></img>
                </span>
              </div>
              <div className="footer-menu">
                <ul className="footer-item   ">
                  <li className="address">
                    {" "}
                    225 Brosdway, Methuen, Massachusetts 01844
                  </li>
                  <li>Support@978eats.com</li>
                  <li> | Terms and Conditions</li>
                  <li>| Privacy</li>
                  <li>| Driver Contact</li>
                </ul>
              </div>

              <div className="footer-bottom-icon">
                <a>
                  <img src="images/facebook1.svg"></img>
                </a>
                <a>
                  <img src="images/instagram1.svg"></img>
                </a>
                <a>
                  <img src="images/twitter1.svg"></img>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <div className="f-18 text-center">
                <p className="m-0  text-center text-white pt-3 pb-3">
                  © 2021 Entreego. All rights reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
