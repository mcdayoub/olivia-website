import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from './LogoGreen.png';
import Hamburger from './HamburgerGreen.png';
import Resume from '../Resume/OliviaDirickson_Resume.pdf';
import Polaroid from './Olivia_Polaroid_Final.jpg';
import LinkedIn from './LinkedIn.png';

const sizeHeight = {
  mobileSH: '550px',
  mobileMH: '625px',
  mobileLH: '736px',
  tabletH: '834px'
};

const deviceHeight = {
  mobileSH: `(min-height: ${sizeHeight.mobileSH})`,
  mobileMH: `(min-height: ${sizeHeight.mobileMH})`,
  mobileLH: `(min-height: ${sizeHeight.mobileLH})`,
  tabletH: `(min-height: ${sizeHeight.tabletH})`
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px'
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`
};

const DisplayMobile = styled.ul`
  background: white;
  color: black;
  padding-top: 20px;

  .container {
    display: flex;
    align-items: left;
  }
  .container-3 {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }

  .logo {
    height: 200px;
  }
  @media ${deviceHeight.mobileSH} {
    .polaroid {
      height: 350px;
    }
  }

  @media ${deviceHeight.mobileMH} {
    .polaroid {
      height: 400px;
    }
  }
  @media ${deviceHeight.mobileLH} {
    .polaroid {
      height: 450px;
    }
  }
  @media ${deviceHeight.tabletH} {
    .polaroid {
      height: 500px;
    }
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
    text-align: center;
    align-content: center;
    justify-content: center;
    padding-bottom: 20px;
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

const AboutMobile = () => (
  <div style={{ height: '100%' }}>
    <MobileNavBarOlivia
      Logo={Logo}
      work={notbold}
      instagram={notbold}
      about={bold}
      contact={notbold}
      color={'#04ad84'}
      Hamburger={Hamburger}
    />

    <DisplayMobile>
      <div className="container-3">
        <img className="polaroid" src={Polaroid} alt="hello" />
      </div>
      <div className="container-3">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
      <div className="container-3">
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
    </DisplayMobile>
  </div>
);

export default AboutMobile;
