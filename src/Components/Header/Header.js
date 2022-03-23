import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import { Container, Nav,Navbar} from 'react-bootstrap'

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="white" expand="md" fixed="top">
        <Container>
          <Navbar.Brand className="brand" href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="navbar-links" to="/">
                Home
              </Link>

              <Link className="navbar-links" to="/about">
                About
              </Link>

              <Link className="navbar-links" to="/skills">
               Skills
              </Link>

              <Link className="navbar-links" to="/projects">
                Projects
              </Link>

              <Link className="navbar-links" to="/contact">
               Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );

}
