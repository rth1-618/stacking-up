import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBtn, NavBtnLink } from "./NavbarElements";

const SideMenu = ({ alterToggle }) => {
  return (
    <StyledMenu>
      <StyledLink to="/about" onClick={alterToggle}>
        About
      </StyledLink>
      <StyledLink to="/services" onClick={alterToggle}>
        Services
      </StyledLink>
      <StyledLink to="/contact" onClick={alterToggle}>
        Contact
      </StyledLink>
      <StyledLink to="/signup" onClick={alterToggle}>
        Sign Up
      </StyledLink>
      <StyledLink to="/product" onClick={alterToggle}>
        Product
      </StyledLink>
      <NavBtnLink to="signin" onClick={alterToggle}>
        Sign In
      </NavBtnLink>

      {/* <StyledLink to="/signin">Sign In</StyledLink> */}
      <CloseToggle onClick={alterToggle} />
    </StyledMenu>
  );
};
const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30%;
  background-color: #111;
  z-index: 99;
  transition: right 1s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

const CloseToggle = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    transition: all 1s ease;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export default SideMenu;
