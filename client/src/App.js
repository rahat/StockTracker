import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Chart from './components/Chart';
import './App.scss';

const App = () => {

  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand href="#">Stock Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Stocks</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <Chart />
    </div>
  )
}

export default App;