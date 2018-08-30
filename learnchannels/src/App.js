// src/App.jsx
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import React, { Component } from 'react';
import './pages/Home.css';
import Home from './pages/Home';
import Acknowledgments from './pages/Contributors';
import Learn from './pages/Learn';
import whyStateChannels from './pages/Why-do-we-need-state-channels'
import statechannels101 from './pages/state-channels-101'
import paymentchannels from './pages/payment-channels-vs-state-channels'
import counterfactualinstantiation from './pages/counterfactual-instantiation'
import htlcs from './pages/hashed-timelock-contracts'
import virtualchannels from './pages/virtual-channels'
import publications from './pages/Publications'
import research from './pages/Research'
import projects from './pages/Projects'

class App extends Component{
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>

        <Route path="/Acknowledgments" component={Acknowledgments}/>
        <Route path="/Learn" component={Learn}/>
        <Route path="/Research" component={research}/>
        <Route path="/Publications" component={publications}/>
        <Route path="/Projects" component={projects}/>
        <Route path="/statechannels101" component={statechannels101}/>
        <Route path="/whyStateChannels" component={whyStateChannels}/>
        <Route path="/paymentchannels" component={paymentchannels}/>
        <Route path="/counterfactualinstantiation" component={counterfactualinstantiation}/>
        <Route path="/htlcs" component={htlcs}/>
        <Route path="/virtualchannels" component={virtualchannels}/>

      </div>
    </Router>
  )
}
}

export default App
