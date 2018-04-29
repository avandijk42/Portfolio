import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from '../miranda.png';
import '../styles/App.css';

class TopBar extends Component{
  render(){
    return(
      <Navbar staticTop fluid inverse collapseOnSelect>
        <Navbar.Header>
            <h1>Alan Vandijk Portfolio</h1>
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopBar
