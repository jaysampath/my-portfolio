import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
                deployed={project.deployed}
                website={project.website}
              />
            </Col>
          ))}
        </Row>
        <p>Find more projects  <a href="https://github.com/jaysampath?tab=repositories" style={{fontStyle: "bold"}}> here</a> </p>
      </Container>
    </Container>
  );
}

export default Projects;
