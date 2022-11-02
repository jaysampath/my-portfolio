import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Jaya Sampath Kolisetty </span>
            from <span className="purple"> Guntur, India.</span>
            <br />
            Software Engineer who have a great passion for learning
            technologies.
            <br />
            Enthusiastic Software Engineer with background working
            productively in dynamic environments. Full Stack Developer with
            experience in creating and deploying websites with Java, Spring
            Boot, ReactJS, Github and AWS. Proud team player focused on
            achieving project objectives with speed and accuracy.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
