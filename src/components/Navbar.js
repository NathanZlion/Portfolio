import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import Popup from "reactjs-popup";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const CustomButton = React.forwardRef(({ open, ...props }, ref) => (
    <button className="button" ref={ref} {...props}>
      Trigger - {props.open ? 'Opened' : 'Closed'}
    </button>
  ));


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onClick={() => updateExpanded(false)} className="nav-link">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => updateExpanded(false)} className="nav-link">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={() => updateExpanded(false)} className="nav-link">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Skills
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={() => updateExpanded(false)} className="nav-link">
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
