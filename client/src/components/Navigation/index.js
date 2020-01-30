import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
  return (
    <div>
      <p>destination Estinmation</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Current Trip</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#"></NavLink>
        </NavItem>
      </Nav>
     
     
    </div>
  );
}

export default Navigation;
