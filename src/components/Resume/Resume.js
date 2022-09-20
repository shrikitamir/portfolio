import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import word from "../../Assets/Tamir Shriki.docx";

const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={word} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Full Stack Developer at Dun & Bradstreet"
              date="May 2022 - Current"
              content={[
                "Worked with React (Redux) and NodeJS (NestJS) on robust and complex systems.",
                "Deployed services to on-premise servers and maintained them using dockers.",
                "Developed under secure regulations and restrictions.",
                "Utilized CI/CD (Github Action) workflows.",
                "Took charge of projects from scratch.",
                "Experienced Linux OS.",
              ]}
            />
            <ResumeContent
              title="Full Stack Developer at Aura Smart Air"
              date="October 2021 - May 2022"
              content={[
                "Developed backend utilizing Microservices architecture.",
                "Worked with Cloud Services - Cloud Functions, Cloud SQL, Big Table, bigQuery, Tasks Queues and Schedulers.",
                "Created the backend documentation and changed the Cloud Functions to be written in TypeScript.",
                "Built and designed from scratch internal tools using Angular and NodeJS.",
                "Worked with wide variety of API's, tools and software (IoT).",
                "Took architectural decisions and implemented them.",
              ]}
            />
            <ResumeContent
              title="Full Stack Developer, Freelance"
              content={[
                "Built Back End from scratch using NodeJS and Firebase (Database) for mobile.",
              ]}
            />
            <ResumeContent
              title="Engineer Coordinator, Intel"
              content={[
                "Daily oversight of cross-functional departments requiring constant communication. Utilized ERP Software.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="Online Courses"
              date="2020"
              content={[
                "Computer Science Harvard Lectures (CS50)",
                "Introduction to Computer Science by Brian Holt.",
                "Data Structures and Algorithms at 'Frontend Masters'.",
                "440+ Web Development Lectures at London App Brewery.",
                "4 Courses on JavaScript 'behind the scenes'",
                "Node.js by Scott Moss",
              ]}
            />
            <ResumeContent
              title="Full Stack Coding Bootcamp"
              date="2021"
              content={[
                "Half-year intensive boot camp (beyond full-time) using the latest languages and frameworks",
              ]}
            />
            <h3 className="resume-title">Certificates</h3>
            <ResumeContent
              title=""
              content={[
                `London App Brewery - Web Developer`,
                `Israel Tech Challenge - Full Stack Developer`,
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <ResumeContent
              title="Books, Articles and Podcasts"
              content={[
                "Consistently listening to tech podcasts. Reading tech articles and reading programming books.",
              ]}
            />
            <ResumeContent
              title="Hackathon - Gaming"
              content={["Participated in a gaming hackathon in August 21'"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
