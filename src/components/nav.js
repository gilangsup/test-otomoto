import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import logo from '../images/logo.png'
import backgroundImg from '../images/backgroundImg.png'
import './style.css';

const ComponentNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImg})`,
      width: "100%",
      height: "300px",
      backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
    }}>
      <Container>
      <Navbar light expand="md">
        <NavbarBrand className="mt-3" href="/"><img src={logo} width='250px'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'white', fontSize: '20px'}} href="/components/">JUBELMOTO</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <h1 className="mt-4 navbarh1">Selalu ada Solusi<br/>di Setiap Situasi</h1>
      </Container>
    </div>
  );
}

export default ComponentNav;