import React, { Component } from 'react';
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

class Layout extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">LearnChannels</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/Learn">Learn</a>
          <a class="nav-item nav-link" href="/Research">Research</a>
          <a class="nav-item nav-link" href="/Publications">Publications</a>
          <a class="nav-item nav-link" href="/Projects">Projects</a>
          <a class="nav-item nav-link" href="/Acknowledgments">Acknowledgments</a>
        </div>
        </div>
        </nav>
      { this.props.children }
      <div id="footer">
   <div class="container">
     <p class="footer-block" style={{textAlign:"right",paddingTop:"30px"}}>&copy; 2018 Moloch Ventures</p>
 </div>
</div>
</div>)
}
}
export default Layout;
