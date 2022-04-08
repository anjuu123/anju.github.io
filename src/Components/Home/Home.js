
import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import './Home.css';
import { AiOutlineDownload } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact";
import Resume from "../../Assests/Images/Anju Dhungana .pdf"

function Home() {
  return (
    <section>
      <Container fluid className="home-section content" id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, color:"#fff" }} className="heading">
                Hello  {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{color:"#fff"}}>
                I'M 
               <Typewriter options={{
                 strings:[
                   "Anju Dhungana"
                 ],
                 autoStart: true,
                 loop: true,
                 deleteSpeed: 50,
               }}
             />
              </h1>
              <p className="home-about-body">
              Web Developer with a passion for web application development and
              success in managing development projects using Scrum & Agile
              methodologies. With ability to follow industry and technical
              trends. Skilled in visualizing, designing, developing, and
              deploying software .
            </p>
            <Button
            variant="danger"
            href={Resume}
            target="_blank"
            style={{ maxWidth: "250px", marginTop:"20px" ,height:"50px", fontSize:"20px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 10 , marginTop:"0px" }}>
             <img src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-avatar-icon-png-image_889398.jpg"></img>
            </Col>
          </Row>
        </Container>
        <Skills/>
        <Contact />
    </section>
  );
}

export default Home;