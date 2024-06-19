import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-color-light">Nathnael Dereje </span>
            from <span className="primary-color-light"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently pursuing my degree in a software developer at Addis Ababa University.
            <br />
            <br />
            I am actively looking for an Internship Opportunity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
