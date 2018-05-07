import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar';
import Timeline from './Pages/Timeline'
import {Education} from './Pages/Education'
import {Projects} from './Pages/Projects'
import { pageTitleStyle } from './components/Base'
import background from './resources/paper.jpg'

import { HashRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

class App extends Component {


  render() {
    document.title = "Alan Vandijk Portfolio"
    return (
      <div className="App" style={{backgroundImage:`url(${background})`}}>
          <div className="page">
            <Router>
              <div>
                <Sidebar />
                <div id="Content">
                  <Route exact path="/" render={() => (
                    <div><h1 style={pageTitleStyle}>Welcome!</h1></div>
                  )} />
                  <Route path="/projects" render={() => (
                    Projects()
                  )} />
                  <Route exact path="/about" render={() => (
                    <div><h1 style={pageTitleStyle}>About</h1></div>
                  )} />
                  <Route exact path="/education" render={() => (
                    Education()
                  )} />
                  <Route exact path="/timeline" render={() => (
                    <div>
                      <Timeline id="one"/>
                      <div style={{height:200}} />
                    </div>
                  )} />
                </div>
              </div>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
