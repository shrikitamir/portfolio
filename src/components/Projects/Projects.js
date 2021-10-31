import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import asyncImg from "../../Assets/Projects/asyncArticle.png";
import drumKitImg from "../../Assets/Projects/drumkit.jpg";
import moviesImg from "../../Assets/Projects/movies.jpg";
import notesImg from "../../Assets/Projects/notes.png";
import petAdoptionImg from "../../Assets/Projects/pet-adoption.png";
import simonImg from "../../Assets/Projects/simon.png";
import stockExchangeImg from "../../Assets/Projects/stock-exchange.jpg";
import tasksTrackerImg from "../../Assets/Projects/tasks-tracker.png";
import tindogImg from "../../Assets/Projects/tindog.png";
import tweetItImg from "../../Assets/Projects/tweetit.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKitImg}
              isBlog={false}
              title="Drum Kit"
              description="Drum Kit App made Using HTML, CSS and Plain JS."
              link="https://github.com/shrikitamir/drumkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesImg}
              isBlog={false}
              title="Movies Search Engine"
              description="Movies search engine app made using Angular. This app also uses Movies API."
              link="https://github.com/shrikitamir/moviePlace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesImg}
              isBlog={false}
              title="Notes App"
              description="Notes App made using React."
              link="https://github.com/shrikitamir/notes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petAdoptionImg}
              isBlog={false}
              title="Pet Adoption"
              description="Pet Shelter Project made with React, Bootstrap, NodeJS, SQL and many libraries. The app implements authentication and many more features."
              link="https://github.com/shrikitamir/petadoption"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonImg}
              isBlog={false}
              title="Simon Game"
              description="Simon Game made using HTML, CSS and Plain JS"
              link="https://github.com/shrikitamir/simon-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockExchangeImg}
              isBlog={false}
              title="Stock Exchange"
              description="Stock Exchange app made using Movies API."
              link="https://github.com/shrikitamir/stockexchange"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasksTrackerImg}
              isBlog={false}
              title="Tasks Tracker"
              description="Tasks Tracker project made with Angular and Mock DB (json-server)."
              link="https://github.com/shrikitamir/taskTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindogImg}
              isBlog={false}
              title="tindog"
              description="tindog App - Bootstrap."
              link="https://github.com/shrikitamir/tindog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tweetItImg}
              isBlog={false}
              title="Tweet It!"
              description="Chatting app made using React. Implements hosting, authentication and database using firebase."
              link="https://github.com/shrikitamir/tweetit"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={asyncImg}
              link="https://dev.to/shrikitamir/asynchronous-javascript-explained-3o6g"
              title="Asynchronous JavaScript Under The Hood"
              site="dev.to"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
