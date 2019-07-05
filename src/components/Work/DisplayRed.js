import React, { Component } from 'react';
import styled from 'styled-components';

const size = {
  tablet: '1000px',
  bigmonitor: '1300px'
};

const device = {
  tablet: `(min-height: ${size.tablet})`,
  bigmonitor: `(min-height: ${size.bigmonitor})`
};
const DisplayRed = styled.ul`
  background: white;
  html,
  body {
    margin: 0;
  }
  height: 100%;
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
    top: 50%;
    margin-left: -162.5px;
    margin-top: -162.5px;
  }
  @media ${device.bigmonitor} {
    .container-2 {
      position: absolute;
      left: 50%;
      top: 45%;
      margin-left: -212.5px;
      margin-top: -212.5px;
    }
  }
  .container-2-spin {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
  }
  @media ${device.bigmonitor} {
    .container-2-spin {
      position: absolute;
      left: 50%;
      top: 45%;
      margin-left: -250px;
      margin-top: -250px;
    }
  }
  .container-3 {
    position: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 40px;
  }
  @media ${device.tablet} {
    .container-3 {
      position: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 40%;
    }
  }
  @media ${device.bigmonitor} {
    .container-3 {
      position: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 60%;
    }
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
  @media ${device.bigmonitor} {
    .centerImage {
      height: 500px;
      width: 500px;
    }
  }
  .previewImage {
    height: 30px;
    width: 30px;
    padding-right: 25px;
    padding-left: 25px;
  }
  .centerImage {
    height: 325px;
    width: 325px;
  }
  @media ${device.bigmonitor} {
    .centerImage {
      height: 425px;
      width: 425px;
    }
  }
  .centerImage-spin {
    height: 400px;
    width: 400px;
  }
  @media ${device.bigmonitor} {
    .centerImage-spin {
      height: 500px;
      width: 500px;
    }
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
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, -8px);
    }
    to {
      transform: translate(0, 0px);
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
      transform: translate(0, -7.5px);
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
      transform: translate(0, -5px);
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
      transform: translate(0, -7.5px);
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
      transform: translate(0, -4px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
`;
export default DisplayRed;
