import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold", fontSize: "1.4rem"}}>{props.title}</Card.Title>
        
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text className="purple">Tech Stack: {props.technologyUsed}</Card.Text>
        <span style={{display: "inline-block", justifyContent : "space-between"}}> 
        <Button variant="primary" href={props.link} target="_blank"className="view-project-button">
          <BiLinkExternal /> &nbsp;
           Github
        </Button>
        {
          props.deployed && <Button variant="primary" href={props.website} target="_blank"className="view-project-button">
          <BiLinkExternal /> &nbsp;
           Website
        </Button>
        }
        
        </span>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
