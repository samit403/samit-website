import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Body extends Component {
    state = {  }
    render() {
        const body = {
            alignContent: "center", 
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "100",
            paddingTop: "150px",
            paddingBottom: "40px"
        };
        const h1 = {
            fontSize: "3.2rem",
            fontWeight: "800"
        };
        const image = {
            width: "200px",
            height: "200px",
            marginBottom: "40px"
        };
        return (
            <div className = "container bg bg-light" style = {body}>
                <img className = "img-thumbnail rounded-circle" src = "https://i.imgur.com/nY3VOK3.png" alt = "profile-samit" style = {image}/>
                <h1 style = {h1}>Hi! I am Samit Barai - PM in Design.
                </h1>
                <br/>
                <p>
                    I have 6+ years of experience in Consulting, Product Management and Product Design. Currently I am working with a Payments startup - Juspay Technologies, based out of Bangalore, India
                </p>
                <br/>
                <br/>
                <Button className = "btn btn-lg btn-dark">View Portfolio</Button>
                <br/>
                <br/>
                <br/>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        );
    }
}
 
export default Body;