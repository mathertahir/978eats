import React, { useContext,useReducer } from "react"; // Import useContext
import { AppContext } from "../../userContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../App.css";

const PhaseList = () => {
  const userdata = useContext(AppContext); // Use useContext to consume context
  return (
    <div>
      <Container className="phase-main">
        <div>
          <h6>{`My name is ${userdata.name} and age is ${userdata.age}`}</h6>
        </div>

      <div>
        <button>+</button>
      </div>
      </Container>
    </div>
  );
};

export default PhaseList;
