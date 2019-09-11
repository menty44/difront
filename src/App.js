import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './assets/2.jpg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Index  from './components/home/index.component';
import Footer from './components/footer/index.component'


class App extends Component {
  render() {
    return (
        <div className="">
      <Router>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">DEMO Streaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Log in</Nav.Link>
                        <Nav.Link  href="#" style={{background: "black"}}>
                            Start your free trial
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </Router>
            <Index/>
            <Footer/>
        </div>




    );
  }
}


export default App;
