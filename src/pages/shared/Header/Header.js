import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="">
  <Container>
  <Navbar.Brand className='myColor fs-1' href="/"><img src="images/navbrand.svg" alt="" /></Navbar.Brand>
  <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className='text-white' id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className='text-white mx-4' href="about">About</Nav.Link>
      <Nav.Link className='text-white mx-4' href="">Experience</Nav.Link>
      <Nav.Link className='text-white mx-4' href="">Projects</Nav.Link>
      <Nav.Link  className='text-white mx-4' href="">Contact</Nav.Link>
      <Nav.Link className='text-white resume px-3 rounded-2 ms-4' href="">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;