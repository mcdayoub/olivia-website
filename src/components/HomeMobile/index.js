import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import imgLogoRed from '../Home/LogoRed.png';
import imgLogoGreen from '../Home/LogoGreen.png';
import imgLogoBlue from '../Home/LogoBlue.png';
import imgLogoRedSpin from '../Home/LogoRedSpin.png';
import imgLogoGreenSpin from '../Home/LogoGreenSpin.png';
import imgLogoBlueSpin from '../Home/LogoBlueSpin.png';

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
  background: #f4f4f4;
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
  @media ${device.tablet} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
  @media ${device.mobileL} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
  @media ${device.mobileM} {
    .nav-items {
      padding-bottom: 19%;
    }
  }
`;

const DisplayLogo = styled.ul`
  @media ${device.tablet} {
    .logo {
      height: 375px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -187.5px;
      margin-top: -187.5px;
    }
  }
  @media ${device.mobileL} {
    .logo {
      height: 300px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -150px;
      margin-top: -150px;
    }
  }
  @media ${device.mobileM} {
    .logo {
      height: 300px;
      position: absolute;
      left: 50%;
      top: 30%;
      margin-left: -150px;
      margin-top: -150px;
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
      color: colorArray[random],
      logo: fullImgArray[random][0],
      logoSpin: fullImgArray[random][1],
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
        <div
          className="container"
          onClick={this.handleChange}
          style={{ height: this.state.height }}
        >
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
                instagram
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
