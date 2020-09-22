import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <Navbar bg = "#fff" variant = "light" fixed = "top">
                <Nav className = "mr-auto">
                    <Nav.Link href = "#home">
                        home
                    </Nav.Link>
                    <Nav.Link href = "#work">
                        work
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/samitbarai">linkedin</Nav.Link>
                    <Nav.Link href="https://dribbble.com/samit403">dribbble</Nav.Link>
                </Nav>
            </Navbar>
        ) 
    }
}
 
export default Header;