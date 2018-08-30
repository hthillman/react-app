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

class Acknowledgments extends Component {
  render() {
    return (
      <Layout>

        <Container style={{paddingTop:"50px"}}>
        <h1 style={{paddingBottom:"30px"}}> Acknowledgments</h1>
                <p className="App-info">

                LearnChannels is a community effort to consolidate the available state channel research. We are in favor of increased collaboration for the benefit of the overarching ecosystem, and welcome contributions--if you'd like to contribute, please submit a pull request <a href="https://github.com/MolochVentures/LearnChannels">here</a>!*
              </p>
              <p>
                <br />
                <strong>Credits</strong>
                <br />
                <strong>Connext Network</strong>

            <ul>
              <li>Arjun Bhuptani</li>
              <li>Hunter Hillman</li>
            </ul>
          <strong>Unaffiliated</strong>
          <ul>
            <li>Eric Olszewski</li>
          </ul>
          <br /> <br />
                <strong>* A note about Moloch Ventures:</strong> Moloch is a decentralized autonomous organization intended to foster collaboration and open source practices among state channel researchers and implementers. Moloch is not a parent organization or a traditional venture fund. It is aimed at fostering collaboration within the industry. A white paper and smart contracts are forthcoming.
          </p>

          </Container>
    </Layout>
    )
  }
}
export default Acknowledgments;
