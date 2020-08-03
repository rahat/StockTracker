import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Routes from "./routes";

import './App.scss';

const App = () => {

  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand as={Link} to="/" >Stock Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/stocks" >Stocks</Nav.Link>
          <Nav.Link as={Link} to="/settings" >Settings</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <Routes />
    </div>
  )
}

export default App;