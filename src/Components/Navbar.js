import React from 'react';
import { Link }
  from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/about">About</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/users">Users</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavbarComponent;
