import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
