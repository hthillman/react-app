// src/App.jsx
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import React, { Component } from 'react';
import './pages/Home.css';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component{
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  )
}
}

export default App
