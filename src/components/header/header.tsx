import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';


export const Header = ({ message }: { message: string }) => <header className="App-header">
  <Navbar bg="dark" variant="dark" sticky="top" >
    <Container>
      <Navbar.Brand>
        <Link to="/">
          Home
        </Link>
      </Navbar.Brand>
      <Nav ><Link
        className="nav-link"
        to="/filter-question"
      >
        Filter
      </Link></Nav>
      <Nav><Link
        className="nav-link"
        to="/sort-question"
      >
        Sort
      </Link></Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{message}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>;