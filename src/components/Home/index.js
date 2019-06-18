import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import imgLogoRed from './LogoRed.png';
import imgLogoGreen from './LogoGreen.png';
import imgLogoBlue from './LogoBlue.png';
import imgLogoRedSpin from './LogoRedSpin.png';
import imgLogoGreenSpin from './LogoGreenSpin.png';
import imgLogoBlueSpin from './LogoBlueSpin.png';

const Display = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  font-size: 16px;
  font-weight: bold;

  .App {
    height: 100vh;
    width: 100%;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
  }
  .container-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 35px;
  }

  .container-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: right;
    padding: 35px;
  }

  /* .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */

  .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
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

  center {
    order: 2;
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

  left {
    order: 1;
  }

  right {
    order: 3;
  }
  a {
    text-decoration: none;
  }

  a:visited {
    color: ${props => props.theme.theme.color};
  }
`;

const Home = ({ theme }) => (
  <div>
    <Display>
      <div className="container">
        <div className="left container-2">
          <div className="topLeft">
            <Link to="/work">work</Link>
          </div>
          <div className="bottomLeft">
            <Link to="/about">about</Link>
          </div>
        </div>
        <div className="container-4">
          <img
            className="logo spin"
            src={require('../Logos/LogoRedSpin.png')}
            alt="hello"
          />
          <img
            className="logo center"
            src={require('../Logos/LogoRed.png')}
            alt="hello"
          />
          <img
            className="logo center"
            src={context => theme.theme.picture}
            alt="hello"
          />
        </div>
        <div className="right container-3">
          <div className="topRight">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rgbqueen/"
            >
              instagram
            </a>
          </div>
          <div className="bottomRight">
            <Link to="/contact">contact</Link>
          </div>
        </div>
      </div>
    </Display>
  </div>
);

export default Home;
