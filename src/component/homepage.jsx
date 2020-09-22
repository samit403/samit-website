import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import { Container } from 'react-bootstrap';
// import Footer from './footer';

export default class Homepage extends Component {
    render() {
      return (
        <Container className = "bg bg-light container-fluid">
            <Header />
            <Body />
            {/* <Footer /> */}
        </Container>
      )
    }
  }