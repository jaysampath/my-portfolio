import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sampath.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Jaya Sampath</strong>
              </h1>
            </Col>
            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p className="connect-paragraph">
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
    </section>
  );
}

export default Home;
