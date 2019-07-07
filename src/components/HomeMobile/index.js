import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import imgLogoRed from './LogoRedWhite.png';
import imgLogoGreen from './LogoGreenWhite.png';
import imgLogoBlue from './LogoBlueWhite.png';
import imgLogoRedSpin from '../Home/LogoRedSpin.png';
import imgLogoGreenSpin from '../Home/LogoGreenSpin.png';
import imgLogoBlueSpin from '../Home/LogoBlueSpin.png';
import Polaroid from '../About/Olivia_Polaroid_Final.jpg';

const size = {
  mobileS: '550px',
  mobileM: '600px',
  mobileL: '720px',
  tablet: '1025px'
};

const device = {
  mobileS: `(max-height: ${size.mobileS})`,
  mobileM: `(max-height: ${size.mobileM})`,
  mobileL: `(max-height: ${size.mobileL})`,
  tablet: `(max-height: ${size.tablet})`
};

const DisplayMobile = styled.ul`
  background: white;
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
  }

  .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: ${props => props.color};
  }
  @media ${device.mobileS} {
    .nav-items {
      padding-bottom: 10%;
    }
  }
  @media ${device.mobileM} {
    .nav-items {
      padding-bottom: 12%;
    }
  }
  @media ${device.mobileL} {
    .nav-items {
      padding-bottom: 12%;
    }
  }
  @media ${device.tablet} {
    .nav-items {
      padding-bottom: 12%;
    }
  }
`;

const DisplayLogo = styled.ul`
  background: #f4f4f4;
  @media ${device.mobileS} {
    .logo {
      height: 280px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -140px;
      margin-top: -140px;
    }
  }
  @media ${device.mobileM} {
    .logo {
      height: 280px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -140px;
      margin-top: -140px;
    }
  }
  @media ${device.mobileL} {
    .logo {
      height: 280px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -140px;
      margin-top: -140px;
    }
  }
  @media ${device.tablet} {
    .logo {
      height: 280px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -140px;
      margin-top: -140px;
    }
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

const colorArray = ['#EF514D', '#04ad84', '#425bea'];
const redImgArray = [imgLogoRed, imgLogoRedSpin];
const greenImgArray = [imgLogoGreen, imgLogoGreenSpin];
const blueImgArray = [imgLogoBlue, imgLogoBlueSpin];
const fullImgArray = [redImgArray, greenImgArray, blueImgArray];

class HomeMobile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      color: '#EF514D',
      logo: '',
      logoSpin: '',
      number: 0,
      height: window.innerHeight
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ height: window.innerHeight });
  };

  componentDidMount() {
    let min = Math.ceil(3);
    let max = Math.floor(0);
    let random = Math.floor(Math.random() * (max - min)) + min;
    this.setState({
      logo: fullImgArray[random][0],
      logoSpin: fullImgArray[random][1],
      color: colorArray[random],
      number: random
    });
  }
  handleChange() {
    if (this.state.number === 0 || this.state.number === 1) {
      this.setState({
        color: colorArray[this.state.number + 1],
        logo: fullImgArray[this.state.number + 1][0],
        logoSpin: fullImgArray[this.state.number + 1][1],
        number: this.state.number + 1
      });
    } else {
      this.setState({
        color: colorArray[0],
        logo: fullImgArray[0][0],
        logoSpin: fullImgArray[0][1],
        number: 0
      });
    }
  }
  render() {
    return (
      <DisplayMobile color={this.state.color}>
        <div id="preload" style={{ display: 'none' }}>
          <img src={imgLogoRed} alt="hello" />
          <img src={imgLogoGreen} alt="hello" />
          <img src={imgLogoBlue} alt="hello" />
          <img src={imgLogoRedSpin} alt="hello" />
          <img src={imgLogoGreenSpin} alt="hello" />
          <img src={imgLogoBlueSpin} alt="hello" />
          <img src={Polaroid} alt="hello" />
        </div>
        <div className="container" style={{ height: this.state.height }}>
          <div className="container-4">
            <div>
              <DisplayLogo>
                <img
                  className="logo spin"
                  src={this.state.logoSpin}
                  alt="hello"
                />
                <img
                  className="logo center"
                  src={this.state.logo}
                  alt="hello"
                  onClick={this.handleChange}
                />
              </DisplayLogo>
            </div>
            <div className="nav-items">
              <Link to="/work">work</Link>
            </div>
            <div className="nav-items">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/rgbqueen/"
              >
                latest
              </a>
            </div>
            <div className="nav-items">
              <Link to="/about">about</Link>
            </div>
            <div className="nav-items">
              <Link to="/contact">contact</Link>
            </div>
          </div>
        </div>
      </DisplayMobile>
    );
  }
}
export default HomeMobile;
