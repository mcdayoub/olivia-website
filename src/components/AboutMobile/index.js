import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from './LogoGreen.png';
import Hamburger from './HamburgerGreen.png';

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
  .container {
    display: flex;
    align-items: left;
  }
  .container-3 {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  .logo {
    height: 200px;
  }
  .polaroid {
    height: 500px;
  }

  @media ${device.mobileM} {
    .polaroid {
      height: 400px;
    }
  }
  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
`;

const Paragraph = styled.ul`
  font-size: 18px;
  width: 300px;
`;
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

const AboutMobile = () => (
  <div>
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
        <img
          className="polaroid"
          src={require('../../polaroid.png')}
          alt="hello"
        />
      </div>
      <div className="container-3">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
    </DisplayMobile>
  </div>
);

export default AboutMobile;
