import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../Contact/Contact";
import "./About.css";


function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>KNOW MORE ABOUT ME</h1>

            <p className="home-about-body">
              Web Developer with a passion for web application development and
              success in managing development projects using Scrum & Agile
              methodologies. With ability to follow industry and technical
              trends. Skilled in visualizing, designing, developing, and
              deploying software .
            </p>
          </Col>
        </Row>
        <Contact />
      </Container>
    </Container>
  );
}
export default About;
