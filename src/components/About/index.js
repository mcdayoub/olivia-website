import React from 'react';
import styled from 'styled-components';
import NavBarOlivia from '../NavBarOlivia';
import Logo from '../Icons/LogoGreen.png';
import Resume from '../Resume/OliviaDirickson_Resume.pdf';
import Polaroid from '../Icons/Olivia_Polaroid_Final.jpg';
import LinkedIn from '../Icons/LinkedIn.png';
import posed from 'react-pose';
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.05
  },
  press: {
    scale: 1.1
  }
});

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
    width: 240px;
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
    text-align: left;
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
`;
const bold = { 'font-weight': 'bold' };

const About = () => (
  <div style={{ height: '100%' }}>
    <NavBarOlivia Logo={Logo} about={bold} color={'#04ad84'} />
    <Display style={{ height: 'calc(100% - 75px)' }}>
      <div className="container" style={{ height: 'calc(100%)' }}>
        <div className="container-3">
          <img className="polaroid" src={Polaroid} alt="hello" />
        </div>
        <div className="container-4">
          <Paragraph>
            Hi, I’m Olivia, an Atlanta-based graphic designer specializing in
            brand design and all things color.
          </Paragraph>
          <div className="buttonDiv">
            <Box>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <button>RESUMÉ</button>
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/in/oliviadirickson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="hello" />
              </a>
            </Box>
          </div>
        </div>
      </div>
    </Display>
  </div>
);

export default About;
