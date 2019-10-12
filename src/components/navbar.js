import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
/* import {Link} from "react-router-dom"; */

const Navi = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='white'>
        <Navbar.Brand href='#home'>Webbly</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#deets'>Home</Nav.Link>
            <Nav.Link href='#memes'>Documentation</Nav.Link>
            <Nav.Link href='#deets'>Forum</Nav.Link>
            <Nav.Link href='#deets'>Platform</Nav.Link>
            <Button variant='primary'>Primary</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
