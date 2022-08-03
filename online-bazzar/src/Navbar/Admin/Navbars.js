import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom';

export default function Navbars() {
  return (
    <>
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand>
        <Link style={{textDecoration :"none",color:"black"}} to = "/"><h3>MicroCommerce</h3></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link  style={{textDecoration :"none",color:"black"}} to="/user">Welcome:User</Link>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/* ****************************************************************************** */}

<Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    
    </>
  )
}
