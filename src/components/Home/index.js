import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import imgLogoRed from './LogoRed.png';
import imgLogoGreen from './LogoGreen.png';
import imgLogoBlue from './LogoBlue.png';
import imgLogoRedSpin from './LogoRedSpin.png';
import imgLogoGreenSpin from './LogoGreenSpin.png';
import imgLogoBlueSpin from './LogoBlueSpin.png';

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
    width: 100%;
  }

  .spinner {
  }
  .logo {
    height: 375px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -187.5px;
    margin-top: -187.5px;
  }

  center {
    order: 2;
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
    color: ${props => props.color};
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#EF514D',
      logo: imgLogoRed,
      logoSpin: imgLogoRedSpin
    };
  }

  componentWillMount() {
    //let random = Math.floor(Math.random() * 3);
    let min = Math.ceil(3);
    let max = Math.floor(0);
    let random = Math.floor(Math.random() * (max - min)) + min;
    let colorArray = ['#EF514D', '#04ad84', '#425bea'];
    let redImgArray = [imgLogoRed, imgLogoRedSpin];
    let greenImgArray = [imgLogoGreen, imgLogoGreenSpin];
    let blueImgArray = [imgLogoBlue, imgLogoBlueSpin];
    let fullImgArray = [redImgArray, greenImgArray, blueImgArray];
    this.setState({
      color: colorArray[random],
      logo: fullImgArray[random][0],
      logoSpin: fullImgArray[random][1]
    });
  }
  render() {
    return (
      <DisplayRed color={this.state.color}>
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
            <img className="logo center" src={this.state.logo} alt="hello" />
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
