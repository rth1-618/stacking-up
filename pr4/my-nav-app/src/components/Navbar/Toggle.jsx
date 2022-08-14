import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Toggle = ({ alterToggle }) => {
  return (
    <div>
      <StyledToggle onClick={alterToggle} />
    </div>
  );
};
const StyledToggle = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export default Toggle;
