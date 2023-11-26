import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.png";
import myImg from "../../Assets/sampath.png";
import Skills from "./Skills.js";
import SocialMedia from "../SocialMedia";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
        </Row>

        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
               <strong className="purple"> My Tech Stack </strong>
            </h1>
            <Skills />
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "} I'm always eager to collaborate on exciting projects and
                contribute my skills to innovative teams. If you're looking for
                a Full Stack Developer who is not only technically proficient
                but also passionate about creating exceptional user experiences,
                I would love to connect.
                </p>
              <p>
                  <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default About;
