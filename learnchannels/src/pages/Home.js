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
import Layout from '../Layout.js'

class Home extends Component {
  render() {
    return (
    <Layout>
        <Container className="Main-container">
          <Container className="Home-container">
            <Row className="Home-header" >
              <h1 style={{paddingTop:'30px', paddingBottom:'20px'}}>Welcome to learnChannels!</h1>
            </Row>
            <Row>

                <p className="App-info" style={{padding: '30 30 30 30'}}>
                If you ended up here, you’re probably interested in learning about state channels, a method for enabling cheap, low-latency transactions on Ethereum.
<br /> <br />We started LearnChannels because the existing information about state channels is spread all over the place. We wanted to gather all of that information in a single place and make it much easier for someone to browse. At the same time, we found that there simply isn’t very much easy-to-understand learning material about state channels. Inspired by LearnPlasma, our goal is to make state channels approachable for developers and laymen alike.
                  </p>

            </Row>
            </Container>
          </Container>
      </Layout>

    );
  }
}
export default Home;
