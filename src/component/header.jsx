import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <Navbar className = "navbar navbar-expand-lg" fixed = "top" >
                <Nav className = "mr-auto">
                    <Nav.Link href = "#home">home</Nav.Link>
                    <Nav.Link href = "#work">work</Nav.Link>
                    <Nav.Link href = "#work">about</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className = "mr-2" href="https://www.linkedin.com/in/samitbarai">
                        <svg id="Bold" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path d="m.396 7.977h4.976v16.023h-4.976z"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></svg>
                    </Nav.Link>
                    <Nav.Link className = "mr-2" href="https://dribbble.com/samit403">
                        <img src = "https://i.imgur.com/K6SVR7W.png" color = "currentColor" alt = "instagram" width = "16px" height = "16px" />
                    </Nav.Link>
                    <Nav.Link className = "mr-2" href="https://instagram.com/samit403">
                        <img src = "https://i.imgur.com/wGSBMgj.png" color = "currentColor" alt = "dribbble" width = "16px" height = "16px" />
                    </Nav.Link>
                </Nav>
            </Navbar>
        ) 
    }
}
 
export default Header;