import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../Assets/CSS/Header.css'

const Header = ({ username, onLogout }) => {
    return (
        <>
      <Navbar className ="nav-background" variant="dark" expand="lg">
        <Navbar.Brand className ="p-3">Bem vindo {username}!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between w-100 p-3">
          <Nav>
          </Nav>
          <Nav>
            <Button variant="outline-light" onClick={onLogout}>
              Sair
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  };

export default Header;