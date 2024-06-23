import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-scroll";

function About() {
  return (
    <Container  className="about-section" name="about">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >

            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Link to="about" smooth={true} activeClass="active" offset={50} duration={500} spy={true} >
                <FaLink />
              </Link>
              &nbsp;  Who <strong className="primary-color">AM I</strong> ?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
