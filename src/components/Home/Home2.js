import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on&nbsp;
              <i>
                <b className="purple">Data structures and algorithms. </b> and
                also in areas related to{" "}
                <b className="purple">Hardcore Javascript concepts.</b>
              </i>
              <br />
              <br />I also apply my passion for developing products with{" "}
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Frameworks and Libraries
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js, React and Angular.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shrikitamir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tamirsh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/tamir.shrikiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:shrikitamir@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
