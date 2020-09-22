import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Body from './body';
import Footer from './footer';

export default class Homepage extends Component {
    render() {
      return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
      )
    }
  }