import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BannerLogo from '../assets/images/banner-img.png';
import './components.css'

function NavbarComponents() {
  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container className='navbar-items'>
          {/* <Navbar.Brand href="/"><b>Yoonmin.Film</b></Navbar.Brand> */}
          <Navbar.Brand href='/'><img src={BannerLogo} alt="logo" className='banner-img'/></Navbar.Brand>
          <Nav className='nav-dropdown'>
            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="../project/euMonthTravel">
                The name of youth(EU, 28 days of records)
              </NavDropdown.Item>
              <NavDropdown.Item href="../project/digitalWork">
                Original(Digital)
              </NavDropdown.Item>
              <NavDropdown.Item href="../project/filmWork">
                Original(Film)
              </NavDropdown.Item>
              <NavDropdown.Item href="../project/urbanPattern">
                Urban Pattern
              </NavDropdown.Item>
              <NavDropdown.Item href="../project/reflectingCity">
                Reflecting City
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../project/snap">
                Portrait
              </NavDropdown.Item>
              <NavDropdown.Item href="../project/collaboWork">
                Collaborative work
              </NavDropdown.Item>              
            </NavDropdown>
            {/* About nav tap */}
            <Nav.Link href="/about" >about</Nav.Link>
            {/* Shop nav tap -> 차후 업데이트 예정*/}
            {/* <Nav.Link href="/shop" >shop</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponents;