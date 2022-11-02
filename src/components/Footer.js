import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> © Jaya Sampath, 2022 </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
