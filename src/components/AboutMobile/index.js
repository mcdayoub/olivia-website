import React from 'react';
import styled from 'styled-components';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from '../Icons/LogoGreen.png';
import Hamburger from '../Icons/HamburgerGreen.png';
import Resume from '../Resume/OliviaDirickson_Resume.pdf';
import Polaroid from '../Icons/Olivia_Polaroid_Final.jpg';
import LinkedIn from '../Icons/LinkedIn.png';

const device = {
  mobileS: `(min-device-height: 300px) and (max-device-height: 569px)`,
  mobileM: `(min-device-height: 570px) and (max-device-height: 668px)`,
  mobileL: `(min-device-height: 669px) and (max-device-height: 813px)`,
  tablet: `(min-device-height: 814px) and (max-device-height: 1280px)`
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
  @media ${device.mobileS} {
    .polaroid {
      height: 350px;
    }
  }

  @media ${device.mobileM} {
    .polaroid {
      height: 400px;
    }
  }
  @media ${device.mobileL} {
    .polaroid {
      height: 450px;
    }
  }
  @media ${device.tablet} {
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
    height: 30px;
    padding-left: 10px;
    margin: 4px 2px;
    padding-top: 20px;
  }
  * :focus {
    outline: 0 !important;
  }
`;

const Paragraph = styled.ul`
  font-size: 18px;
  width: 250px;
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
          Hi, I’m Olivia, an Atlanta-based graphic designer specializing in
          brand design and all things color.
        </Paragraph>
      </div>
      <div className="container-3">
        <div className="buttonDiv">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button>RESUMÉ</button>
          </a>
          <a
            href="https://www.linkedin.com/in/oliviadirickson/"
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
