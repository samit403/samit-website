import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Navbar bg = "light" variant = "light">
                <Nav className = "mr-auto">
                    <Nav.Link href="#home">home</Nav.Link>
                    <Nav.Link href="#home">work</Nav.Link>
                    <Nav.Link href="#home">about me</Nav.Link>
                </Nav>
                </Navbar>
            </Container>
        ) 
    }
}
 
export default Header;