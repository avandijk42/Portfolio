import React, { Component } from "react";
import {Nav, NavItem, Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainScreen extends Component{

  render(){
    return(
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>

        </Nav>
      </Navbar>
      </div>
  );
  }
}
export default MainScreen;
