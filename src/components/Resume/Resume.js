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
              title="Full Stack Developer at Aura Smart Air"
              date="October 2021 - Current"
              content={[
                "Worked on existing backend using Microservices architecture.",
                "Worked with Cloud Services - Cloud Functions, Cloud SQL, Big Table, bigQuery, Tasks Queues and Schedulers.",
                "Took architectural decisions and implemented them.",
                "Created our backend documentation and changed our Cloud Functions to be written in TypeScript.",
                "Worked with wide variety of API's, tools and software (IoT).",
                "Learnt new framework, Developed new tools and landing pages from scratch.",
                "Collaborated with teammates, made sprints and participated in meetings.",
              ]}
            />
            <ResumeContent
              title="Full Stack Developer, Freelance"
              content={[
                "Built Back End using NodeJS with Database (Firebase) for mobile.",
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
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="High School"
              date="2010 - 2016"
              content={[]}
            />
            <ResumeContent
              title="Online Courses"
              date="2020"
              content={[
                "440+ Lectures of Web Development at London App Brewery.",
                "Introduction to Computer Science by Brian Holt.",
                "Computer Science Harvard Lectures (CS50)",
                "Data Structures and Algorithms at FrontEnd Masters",
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
