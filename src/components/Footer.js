import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container  className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Developed by Nathnael Dereje</h3>
        </Col>
        <Col md="6" className=" d-flex gap-20 align-center items-center">
          <ul className="footer-icons w-100 d-flex gap-20 align-center justify-stretch">
            <li className="social-icons">
              <a
                href="https://github.com/NathanZlion"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nathnael-dereje/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/Nathanzgreat"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
