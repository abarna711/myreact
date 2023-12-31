import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Gift(){
    return(
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        
    )
}
export default Gift;