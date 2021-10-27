import React from "react";
import { Col, Row } from "react-bootstrap";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-visualstudio-plain"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-atom-original"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="cib-postman"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="cib-heroku"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-git-plain-wordmark"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-github-original"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-bitbucket-original"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-jira-plain"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-npm-original-wordmark"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-yarn-plain"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="devicon-figma-plain"></i>
      </Col>
    </Row>
  );
};

export default Toolstack;
