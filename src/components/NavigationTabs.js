import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Badge } from 'reactstrap';

const NavigationTabs = props => (
  <div>
  <Navbar color="light" light expand="md">
    <NavbarBrand>CURRENT SCORE: {props.clicks}</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
        <h2><Badge color="info">HIGH SCORE: {props.currentHighScore} </Badge></h2>
        </NavItem>
        </Nav>
  </Navbar>
</div>
)

export default NavigationTabs




