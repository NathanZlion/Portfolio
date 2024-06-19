import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";
import { Modal, Button } from "react-bootstrap";
import Resume from "./components/Resume/Resume"
import pdf from "./Assets/../Assets/Nathnael_Dereje_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

// import CustomPaging from "./components/Projects/Projectnew";

function App() {
  const [load, upadateLoad] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} />
        <Modal show={showModal} onHide={handleCloseModal} style={{ height: "95vh" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Resume />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} className="close-modal-btn">
              Close
            </Button>
            <Button
              variant="primary"
              download
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className="download-resume-btn"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Modal.Footer>
        </Modal>


        <Element name="home" className="element active">
          <Home />
        </Element>

        <Element name="about" className="element">
          <About />
        </Element>

        <Element name="skills" className="element">
          <Skills />
        </Element>

        <Element name="projects" className="element active">
          <Projects />
        </Element>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
