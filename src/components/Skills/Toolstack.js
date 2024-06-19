import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
  SiNeovim
  // DiGit
} from "react-icons/si";
import { DiGit } from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <SiLinux />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <SiNeovim />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
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
