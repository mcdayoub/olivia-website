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
    height: 375px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -225px;
    margin-top: -225px;
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
    height: 450px;
    width: 450px;
  }
`;
export default DisplayRed;
