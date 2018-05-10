import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar';
import Timeline from './Pages/Timeline'
import {Education} from './Pages/Education'
import {Projects} from './Pages/Projects'
import {About} from './Pages/About'
import { pageTitleStyle } from './components/Base'
import background from './resources/amsterdam.jpg'

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
                    About()
                  )} />
                  <Route path="/projects" render={() => (
                    Projects()
                  )} />
                  <Route exact path="/about" render={() => (
                    About()
                  )} />
                  <Route exact path="/education" render={() => (
                    Education()
                  )} />
                  <Route exact path="/timeline" render={() => (
                    <div>
                      <Timeline id="one"/>
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
