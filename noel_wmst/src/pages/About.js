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

class About extends Component {
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
          <Container>
            <Row>
              <h1>About us!</h1>
            </Row>
            <Row>
                <Col>
                <p className="App-info">
                  We've got resources to answer all your burning questions about feminism, intersectionality, and the motherf#$@ing patriarchy.
                  Whether you're woke AF or voted for that orange gasbag, we're here to help!
                  </p>
                </Col>
            </Row>
          </Container>
    </div>
    )
  }
}
export default About;
