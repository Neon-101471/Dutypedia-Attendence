import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">Dutypedia</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/not-found">About Us</Nav.Link>
            <Nav.Link as={Link} to="/not-found">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/attendence-1">Attendence-1</Nav.Link>
            <Nav.Link as={Link} to="/attendence-2">Attendence-2</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;