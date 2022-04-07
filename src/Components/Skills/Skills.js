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
                <Col xs={6} md={4} className="tech-icons">
                    <DiHtml5 />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiCss3 />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiNodejs />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiReact />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiMongodb />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <SiDjango />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <SiPostgresql />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <DiPython />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <SiSqlite />
                </Col>
                <Col xs={6} md={4} className="tech-icons">
                    <SiPostman />
                </Col>

                <Col xs={6} md={4} className="tech-icons">
                    <DiBootstrap/>
                </Col>
                
            </Row>
        </div>
    );
}

export default Skills;
