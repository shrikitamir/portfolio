import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        className="project-card-img"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>
          <b>{props.title}</b>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
