
import React from "react";
import Slider from "react-slick";
import { Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { FaLink } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

// import { baseUrl } from "./config";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Projects() {

  // const baseUrl = "../../Assets/Projects"

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
  return (
    <Container fluid className="project-section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
            <Link to="projects" smooth={true} activeClass="active" offset={50} duration={500} spy={true} >
                <FaLink />
            </Link>
        &nbsp;  Projects <strong className="primary-color"> I worked on</strong> ?
      </h1>
      <div className="slider-container w-full">
        <Slider {...settings}>
          <Col className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tetris in Java"
              description="Created a classic Tetris game in Java with a sleek UI using Java Swing. Developed intricate game logic and utilized threads to handle the dynamic falling block mechanics."
              ghLink="https://github.com/NathanZlion/tetris-in-java"
            />
          </Col>
          <Col className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Workout Warriors 💪"
              description="
            Workout Warrior is a mobile fitness app designed for gym members, personal trainers, and gym managers.
                It offers a user-friendly interface and comprehensive features to access training plans, track progress,
                and schedule workouts. With streamlined fitness management and effective communication.
                "
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Nebiyou-Daniel/Mobile-App"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Info blender"
              description="Infoblender is a web and mobile application that allows users to get news from different sources and compare them."
              ghLink="https://github.com/NathanZlion/Info_Blend"
            />
          </Col>
          <Col className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hacks Datavis"
              description="Implemented a fullstack data visualization website for the A2SV 2024 continental hackathon. Used Express.js for the backend, Appscript, and React."
              ghLink="https://github.com/NathanZlion/hacks-datavis"
              demoLink="https://hacks-datavis.vercel.app"
            />
          </Col>
          <Col className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Classroom Attendance System"
              description="Used Flutter for for the Mobile app, Flask as the backend, Face recognition algorithm for recognizing detecting faces. "
              ghLink="https://github.com/NathanZlion/Class-Attendance-System/"
            />
          </Col>

        </Slider>
      </div>

    </Container>
  );
}

export default Projects;