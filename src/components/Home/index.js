import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import imgLogoRed from './LogoRed.png';
import imgLogoGreen from './LogoGreen.png';
import imgLogoBlue from './LogoBlue.png';
import imgLogoRedSpin from './LogoRedSpin.png';
import imgLogoGreenSpin from './LogoGreenSpin.png';
import imgLogoBlueSpin from './LogoBlueSpin.png';
import Polaroid from '../About/Olivia_Polaroid_Final.jpg';

const DisplayRed = styled.ul`
  background: #f4f4f4;
  color: ${props => props.color};
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
    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 25px;
  }

  .container-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: right;
    padding-top: 19px;
    padding-bottom: 19px;
    padding-right: 25px;
  }

  .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .logo {
    height: 375px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -187.5px;
    margin-top: -187.5px;
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
  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: ${props => props.color};
  }
`;
const colorArray = ['#EF514D', '#04ad84', '#425bea'];
const redImgArray = [imgLogoRed, imgLogoRedSpin];
const greenImgArray = [imgLogoGreen, imgLogoGreenSpin];
const blueImgArray = [imgLogoBlue, imgLogoBlueSpin];
const fullImgArray = [redImgArray, greenImgArray, blueImgArray];

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      color: '#EF514D',
      logo: '',
      logoSpin: '',
      number: 0
    };
  }

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
      <DisplayRed color={this.state.color}>
        <div id="preload" style={{ display: 'none' }}>
          <img src={imgLogoRed} alt="hello" />
          <img src={imgLogoGreen} alt="hello" />
          <img src={imgLogoBlue} alt="hello" />
          <img src={imgLogoRedSpin} alt="hello" />
          <img src={imgLogoGreenSpin} alt="hello" />
          <img src={imgLogoBlueSpin} alt="hello" />
          <img src={Polaroid} alt="hello" />
        </div>
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
            <img className="logo spin" src={this.state.logoSpin} alt="hello" />
            <img
              className="logo center"
              src={this.state.logo}
              alt="hello"
              onClick={this.handleChange}
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
      </DisplayRed>
    );
  }
}

export default Home;
