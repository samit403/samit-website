import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Portfolio from './portfolio';
// import Footer from './footer';
import { Container } from 'react-bootstrap';

export default class Homepage extends Component {
    render() {
      return (
        <Container className = "container">
            <Header />
            <Body />
            <Portfolio />
            {/* <Footer /> */}
        </Container>
      )
    }
  }