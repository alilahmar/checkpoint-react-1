import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavBar() {
    return (
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Dishes</Nav.Link>
      <Nav.Link href="#pricing">Prices</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
    </Nav>
  </Navbar>
    )
}
