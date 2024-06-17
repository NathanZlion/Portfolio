import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";

function App() {
  const [load, upadateLoad] = useState(true);

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
        <Navbar />

        <Element name="home" className="element active">
          <Home />
        </Element>

        <Element name="about" className="element">
          <About />
        </Element>

        <Element name="skills" className="element">
          <Skills />
        </Element>

        <Element name="projects" className="element">
          <Projects />
        </Element>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
