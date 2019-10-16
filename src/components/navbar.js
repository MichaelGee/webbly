import React from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
/* import {Link} from "react-router-dom"; */
const Navi = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='navbar'>
        <div className='container'>
          <Navbar.Brand href='#home' className='brand'>
            Webbly<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='links' href='#deets'>
                Home
              </Nav.Link>
              <Nav.Link className='links' href='#memes'>
                Documentation
              </Nav.Link>
              <Nav.Link className='links' href='#deets'>
                Forum
              </Nav.Link>
              <Nav.Link className='links mr-5' href='#deets'>
                Platform
              </Nav.Link>
              <Button variant='primary'>Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navi;
