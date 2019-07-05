import React, { Component } from 'react';
import styled from 'styled-components';
const size = {
  mobileS: '550px',
  mobileM: '600px',
  mobileL: '736px',
  tablet: '834px'
};

const device = {
  mobileS: `(min-height: ${size.mobileS})`,
  mobileM: `(min-height: ${size.mobileM})`,
  mobileL: `(min-height: ${size.mobileL})`,
  tablet: `(min-height: ${size.tablet})`
};
const DisplayRed = styled.ul`
  background: white;
  html,
  body {
    margin: 0;
  }
  height: calc(100% - 75px);
  .containerForPreview {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
  .container-2 {
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -125px;
    margin-top: -125px;
  }
  .container-2-spin {
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -150px;
    margin-top: -150px;
  }

  .container-3 {
    position: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    padding-bottom: 25%;
  }
  .container-4 {
    display: flex;
    flex-direction: column;
    width: 100px;
    text-align: right;
    float: left;
  }

  .spinner {
  }
  .logo {
    height: 375px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -187.5px;
    margin-top: -187.5px;
  }

  .previewImage {
    height: 30px;
    width: 30px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .centerImage {
    height: 250px;
    width: 250px;
  }
  .centerImage-spin {
    height: 300px;
    width: 300px;
  }

  .spin {
    -webkit-animation: spin 25s linear infinite;
    -moz-animation: spin 25s linear infinite;
    animation: spin 25s linear infinite;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .floating {
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .floating {
    animation-name: floating;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 8px);
    }
    to {
      transform: translate(0, -0px);
    }
  }
  .floating-2 {
    animation-name: floating-2;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating-2 {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 7.5px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
  .floating-3 {
    animation-name: floating-3;
    animation-duration: 3.75s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating-3 {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 5px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
  .floating-4 {
    animation-name: floating-4;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating-4 {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 7.5px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
  .floating-5 {
    animation-name: floating-5;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating-5 {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 4px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
  @media ${device.mobileS} {
    .nav-items {
      padding-bottom: 10%;
    }
  }
  @media ${device.mobileM} {
    .nav-items {
      padding-bottom: 12%;
    }
  }
  @media ${device.mobileL} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
  @media ${device.tablet} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
`;
export default DisplayRed;
