import React from "react";
import styled from "styled-components";

const Check = () => (
  <StyledCheck
    className="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" />
    <path
      className="checkmark__check"
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </StyledCheck>
);

const StyledCheck = styled.svg`
  .checkmark {
    position: absolute;
    margin-top: 50%;
    margin-left: 40%;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #a0d4db;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px white;
    animation: fill 0.4s ease-in-out 4s forwards, scale 0.3s ease-in-out 4s both;
  }

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: white;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) 5s forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 5.4s forwards;
    stroke: white;
    fill: transparent;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px white;
    }
  }
`;

export default Check;
