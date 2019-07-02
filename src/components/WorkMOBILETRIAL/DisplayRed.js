import React, { Component } from 'react';
import styled from 'styled-components';
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
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
  }
  .container-2 {
    position: absolute;
    left: 50%;
    top: 60%;
    margin-left: -125px;
    margin-top: -125px;
  }
  .container-2-spin {
    position: absolute;
    left: 50%;
    top: 60%;
    margin-left: -150px;
    margin-top: -150px;
  }

  .container-3 {
    position: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    padding-left: 40px;
    padding-bottom: 40px;
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
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }

  .previewImage {
    height: 30px;
    width: 30px;
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
    margin-left: 30px;
    margin-top: 5px;
  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 7.5px);
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
    margin-left: 30px;
    margin-top: 5px;
  }

  @keyframes floating-2 {
    from {
      transform: translate(0, 2.5px);
    }
    65% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, 2.5px);
    }
  }
`;
export default DisplayRed;
