import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from './cards'
import ecommerce from '../../Assests/Images/ecommerce.png'
import bikri from '../../Assests/Images/bikri.png'
import health from '../../Assests/Images/health.png'
import musicPlayer from '../../Assests/Images/musicplayer.jpg'


function Projects() {
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading text-center">
         MY WORKS
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* card 1 */}
          <Col md={4} className="project-card">
            <Card
              imgPath={ecommerce}
              isBlog={false}
              title="A & A Collection"
              description="Ecommerce site build using Reactjs, Bootstrap which have features category to filter clothes and add to cart."
              link="https://anjuu123.github.io/ecommerce-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={health}
              isBlog={false}
              title="My Health App"
              description="Health Tracker to keep record of everyday activities built with Mongodb, Expressjs, Reactjs ,Nodejs and Bootstrap"
              link="https://lark-ga.github.io/my-health-client/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
            imgPath={bikri}  
            isBlog={false}
              title="Bikri Bazzar"
              description="Real Estate site build using HTML, CSS ,JS and Bootstrap"
              link="https://anjuu123.github.io/Bikri.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
            imgPath={musicPlayer}  
            isBlog={false}
              title="Music Player"
              description="Music Player App build using HTML, CSS ,and Vanilla Javascript"
              link="https://anjuu123.github.io/music-player/"
            />
          </Col>
          
         

        </Row>
      </Container>
  
  );
}

export default Projects;