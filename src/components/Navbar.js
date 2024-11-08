import React,{Link} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './components.css'

function NavbarComponents() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container className='navbar-items'>
          <Navbar.Brand to="/"><b>yoonmin_film</b></Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item to="project/3.1">
              Film
              </NavDropdown.Item>
              <NavDropdown.Item to="project/3.2">
                Digital
              </NavDropdown.Item>
              <NavDropdown.Item to="project/3.3">
              Urban Pattern
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="project/3.4">
                Video
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/AboutPage">about</Nav.Link>
            <Nav.Link to="/ShopPage">shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponents;