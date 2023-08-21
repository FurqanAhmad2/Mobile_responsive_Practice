import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/crop.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width={150}
            height={150}
            className="d-inline-block align-top"
            alt="Logo"
            style={{ marginRight: '10px' }} // Adjust the margin as needed
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Pizza</Nav.Link>
            <hr style={{color: 'black'}}/>
            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Pasta</Nav.Link>
            <hr style={{color: 'black'}}/>

            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Deals</Nav.Link>
            <hr style={{color: 'black'}}/>

            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Desserts</Nav.Link>
            <hr style={{color: 'black'}}/>

            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Salad</Nav.Link>
            <hr style={{color: 'black'}}/>

            <Nav.Link href="/" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }} >Drinks</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
