import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="">
  <Container>
  <Navbar.Brand className='myColor fs-1' href="/"><img src="images/navbrand.svg" alt="" /></Navbar.Brand>
  <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className='text-white mx-4' as={Link} to="/">Home</Nav.Link>
      <Nav.Link className='text-white mx-4' as={Link} to="about">About</Nav.Link>
      <Nav.Link className='text-white mx-4' as={Link} to="projects">Projects</Nav.Link>
      <Nav.Link className='text-white mx-4' as={Link} to="blog">Blog</Nav.Link>
      <Nav.Link  className='text-white mx-4' as={Link} to="contact">Contact</Nav.Link>
      <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://drive.google.com/file/d/1iymwjSkaPIWZ8yKAQQSuNO6YNrV8sB8m/view?usp=sharing">Resume</a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;