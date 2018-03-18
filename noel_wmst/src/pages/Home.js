import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavbarBrand href="/" className="App-title" >The Feminist Reference</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Page3</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <Container className="Main-container">
          <Container className="Home-container">
            <Row className="Home-header">
              <h1>Welcome!</h1>
            </Row>
            <Row>
                <Col>
                <p className="App-info">
                  Welcome to The Feminist Reference, an online encyclopedia containing everything you could possibly
                  need in your fight for the political, social, and economic equality of all humans.
                  To get started, check out one of these websites!
                  </p>
                </Col>
                <Col>
                <ul className="Main-links">
                  <li> <a href="http://feministing.com/">Feministing</a></li>
                  <li> <a href="https://everydayfeminism.com/">EverydayFeminism</a></li>
                  <li> <a href="https://theestablishment.co/">The Establishment</a></li>
                  <li> <a href="https://www.browngirlmagazine.com/">Brown Girl Magazine</a></li>
                </ul>
              </Col>
            </Row>
            </Container>
          </Container>
      </div>

    );
  }
}
export default Home;
