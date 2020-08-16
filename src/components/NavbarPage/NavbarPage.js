import React from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';



const NavbarPage = () => {
      	return(
          <div>
      		<Navbar bg="blue" expand='sm'>
      			<Navbar.Brand href="/home">
      			<img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="logo" width="200" height="50"/>
      			</Navbar.Brand>
      		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
      		  <Navbar.Collapse id="basic-navbar-nav">
      		    <Nav className="mr-auto">
      		      <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" id="myInput" onkeyup="myFunction()" placeholder="Search.."/>
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
      		);
	
}

export default (NavbarPage);