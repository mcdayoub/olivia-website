import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoGreen.png';

const Display = styled.ul`
  background: white;
  color: black;
  .container {
    display: flex;
    justify-content: flex-start;
    height: 100vh;
  }
  .container-2 {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 35px;
  }
  .container-3 {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: auto;
    margin-right: 40px;
    justify-content: center;
  }
  .container-4 {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: auto;
    justify-content: center;
    flex-basis: 20%;
  }

  .logo {
    height: 200px;
  }
  .polaroid {
    height: 500px;
  }
  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
  .linkItem {
    padding-left: 25px;
    padding-bottom: 10px;
  }
`;

const Paragraph = styled.ul`
  font-size: 18px;
`;
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

const About = () => (
  <div>
    <NavBarOlivia
      Logo={Logo}
      work={notbold}
      instagram={notbold}
      about={bold}
      contact={notbold}
      color={'#04ad84'}
    />
    <Display>
      <div className="container">
        <div className="container-2">
          <Link to="/">
            <img
              className="logo"
              src={require('../../weblogoolivia-01.png')}
              alt="hello"
            />
          </Link>
          <div className="linkItem">
            <Link to="/work">work</Link>
          </div>
          <div className="linkItem">
            <Link to="/about">about--></Link>
          </div>
          <div className="linkItem">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rgbqueen/"
            >
              instagram
            </a>
          </div>
          <div className="linkItem">
            <Link to="/contact">contact</Link>
          </div>
        </div>
        <div className="container-3">
          {' '}
          <img
            className="polaroid"
            src={require('../../polaroid.png')}
            alt="hello"
          />
        </div>
        <div className="container-4">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </Paragraph>
        </div>
      </div>
    </Display>
  </div>
);

export default About;
