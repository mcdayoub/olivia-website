import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoGreen.png';
import Resume from '../Resume/OliviaDirickson_Resume.pdf';
import Polaroid from './Olivia_Polaroid_Final.jpg';
import LinkedIn from './LinkedIn.png';

const Display = styled.ul`
  background: white;
  color: black;
  .container {
    display: flex;
    justify-content: flex-start;
  }
  .container-3 {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: auto;
    margin-right: 40px;
    justify-content: center;
    padding-left: 50px;
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
  button {
    background-color: #04ad84;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Courier New';
    height: 50px;
    font-weight: bold;
  }
  .buttonDiv {
    display: flex;
    padding-top: 20px;
    text-align: center;
    align-content: center;
    justify-content: center;
  }
  .buttonDiv img {
    height: 50px;
    padding-left: 20px;
    margin: 4px 2px;
  }
  * :focus {
    outline: 0 !important;
  }
`;

const Paragraph = styled.ul`
  font-size: 18px;
  width: 300px;
`;
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

const About = () => (
  <div style={{ height: '100%' }}>
    <NavBarOlivia
      Logo={Logo}
      work={notbold}
      instagram={notbold}
      about={bold}
      contact={notbold}
      color={'#04ad84'}
    />
    <Display style={{ height: 'calc(100% - 75px)' }}>
      <div className="container" style={{ height: 'calc(100%)' }}>
        <div className="container-3">
          <img className="polaroid" src={Polaroid} alt="hello" />
        </div>
        <div className="container-4">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </Paragraph>
          <div className="buttonDiv">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button>RESUMÉ</button>
            </a>
            <a
              href="https://www.linkedin.com/in/olivia-dirickson-179b88148/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="hello" />
            </a>
          </div>
        </div>
      </div>
    </Display>
  </div>
);

export default About;
