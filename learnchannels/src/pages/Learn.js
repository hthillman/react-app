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

class Learn extends Component {
  render() {
    return (
      <Layout>
        <Container style={{paddingTop:"50px"}}>
        We've put together these resources as a reference for newcomers and seasoned blockchain developers alike. This section covers (1) why we believe state channels are necessary, (2) what state channels are and how they work, and (3) a few areas of ongoing research.

As a primer, here are a few useful links about the fundamentals of state channels*:
<br />

​  <ul>
    <li><Link to="/whyStateChannels"> Why do we need state channels?</Link></li>
    <li><a href="/statechannels101">State channels 101</a></li>
    <li><a href="/paymentchannels">Payment channels vs. State channels</a></li>
    <li><a href="/counterfactualinstantiation">Counterfactual instantiation</a></li>
    <li><a href="/htlcs">Hashed timelock contracts</a></li>
    <li><a href="/virtualchannels">Virtual channels</a></li>
  </ul>

<strong>*Note:</strong> these pages assume basic familiarity with blockchain concepts such as smart contracts.







          </Container>
    </Layout>
    )
  }
}
export default Learn;
