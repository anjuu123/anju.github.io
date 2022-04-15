import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiJavascript1, DiReact, DiNodejs, DiMongodb, DiBootstrap,DiPython, DiHtml5, DiCss3} from "react-icons/di";
import { SiPostman, SiSqlite, SiDjango, SiPostgresql} from "react-icons/si";
import "./Skills.css";

function Skills() {
    return (
        <div>
            <h1 className="text-center skills-h1">MY SKILLS</h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiHtml5 style={{color:"E54C21"}}/>
                    <h6>HTML5</h6>
                </Col>
                
                <Col xs={4} md={2} className="tech-icons"  >
                    <DiCss3 style={{color:"167DBE"}} />
                    <h6>CSS3</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 style={{color:"F7E018"}} />
                    <h6>Javascript</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs  style={{color:"91C63D"}}/>
                    <h6>Nodejs</h6>
                </Col>
               
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact  style={{color:"00D8FF"}} />
                    <h6>React</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb style={{color:"00ED64"}} />
                    <h6>MongoDB</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiDjango style={{color:"000"}} />
                    <h6>Django</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql  style={{color:"336791"}}/>
                    <h6>PostgreSQL</h6>
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiPython  style={{color:"FFDC4B"}}/>
                    <h6>Python</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiSqlite  style={{color:"003856"}}/>
                    <h6>SQLite</h6>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostman  style={{color:"FF6C37"}}/>
                    <h6>Postman</h6>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <DiBootstrap style={{color:"810AF9"}}/>
                    <h6>Bootstrap</h6>
                </Col>
                
            </Row>
        </div>
    );
}

export default Skills;
