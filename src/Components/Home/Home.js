
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'
import Typewriter from 'typewriter-effect';
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section content" id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, color:"green" }} className="heading">
                Hi {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{color:"green"}}>
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

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
             <h1>iMAGE PLACEHOLDER</h1>
            </Col>
          </Row>
        </Container>
        <About />
    </section>
  );
}

export default Home;