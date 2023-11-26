import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Jaya Sampath Kolisetty </span>
            from <span className="purple"> India, </span>
            a passionate and versatile Full Stack Developer dedicated to
            delivering high-quality software solutions. With a keen eye for
            detail and a commitment to excellence, I thrive in turning complex
            ideas into robust, user-friendly applications.
            <br />
            <br />
            I bring more than 2 years of experience in the world of software
            development, specializing in both front-end and back-end
            technologies. My journey began with a fascination for
            problem-solving and a love for creating efficient, scalable systems.
            Over the years, I've built dynamic and interactive web applications.
            <br />
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
