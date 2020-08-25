import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Routes from "./routes";

import './App.scss';

const App = () => {

  return (
    <div>
      <Navbar variant="dark" className="pb-3">
        <Navbar.Brand as={Link} to="/" >Stock Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/stocks" >Stocks</Nav.Link>
          <Nav.Link as={Link} to="/create-alert" >Create Alert</Nav.Link>
        </Nav>
      </Navbar>
      <Routes />
    </div>
  )
}

export default App;