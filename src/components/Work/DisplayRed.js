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
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
  }
  .container-2-spin {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -237.5px;
    margin-top: -237.5px;
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
  }
  .centerImage {
    height: 400px;
    width: 400px;
  }
  .centerImage-spin {
    height: 475px;
    width: 475px;
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
`;
export default DisplayRed;
