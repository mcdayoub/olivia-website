import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Display = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  font-size: 18px;

  .App {
    background-color: #f8f3f0;
    height: 100vh;
    width: 100%;
  }

  .logo {
    height: 400px;
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

  .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  center {
    order: 2;
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
            className="logo center"
            src={require('../../weblogoolivia-01.png')}
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
