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

class projects extends Component {
  render() {
    return (
        <Layout>
        <Container style={{paddingTop:"50px"}}>


<p><h1 id="projects">Projects</h1>

<p>There are a number of projects working on state channels and payment channel research and implementations: </p>

<ul>
<li><a href="https://connext.network/">Connext</a></li>

<li><a href="https://counterfactual.com/">Counterfactual</a></li>

<li><a href="https://finalitylabs.io/">Finality Labs</a></li>

<li><a href="https://raiden.network/">Raiden</a></li>

<li><a href="https://machinomy.com/">Machinomy</a></li>

<li><a href="https://spankchain.com/products/#payment">Spankchain (Link SFW)</a></li>

<li><a href="https://www.perun.network/">Perun</a></li>

<li><a href="https://www.celer.network/">Celer</a></li>

<li><a href="https://liquidity.network/">Liquidity</a></li>
</ul>

<p>Please let us know if we missed you!</p></p>

          </Container>
    </Layout>
    )
  }
}
export default projects;
