import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";
import logo from "../../logo192.png";
import Toggle from "./Toggle.jsx";

const Navbar = ({ alterToggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" height="40px" width="40px" />

          {/* <h1>Logo</h1> */}
        </NavLink>
        <Toggle alterToggle={alterToggle} />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/product">Product</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/todo" style={{ backgroundColor: "#5f009d" }}>
            Todo List
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
