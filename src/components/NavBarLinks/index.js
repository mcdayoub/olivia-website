import React, { Component } from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RedX from './RedX.png';
import GreenX from './GreenX.png';
import BlueX from './BlueX.png';

const size = {
  mobileS: '550px',
  mobileM: '600px',
  mobileL: '736px',
  tablet: '834px'
};

const device = {
  mobileS: `(min-device-height: 300px) and (max-device-height: 569px)`,
  mobileM: `(min-device-height: 570px) and (max-device-height: 668px)`,
  mobileL: `(min-device-height: 669px) and (max-device-height: 813px)`,
  tablet: `(min-device-height: 1025px) and (max-device-height: 1280px)`
};

const LinksStyle = styled.ul`
  background: white;
  color: ${props => props.color};
  font-size: 16px;
  top: 0;
  a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
  }
  a:visited {
    color: ${props => props.color};
  }
  @media ${device.mobileS} {
    .nav-items {
      padding-bottom: 6%;
    }
  }
  @media ${device.mobileM} {
    .nav-items {
      padding-bottom: 7%;
    }
  }
  @media ${device.mobileL} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
  @media ${device.tablet} {
    .nav-items {
      padding-bottom: 15%;
    }
  }

  .nav-items {
    padding-top: 30px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }

  .container-4 {
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: space-evenly;
    padding-top: 50%;
  }
  @media ${device.mobileS} {
    .container-4 {
      height: 100%;
      width: 100%;
      text-align: center;
      justify-content: space-evenly;
      padding-top: 100%;
    }
  }
  .xbutton {
    height: 20px;
    width: 20px;
    text-align: right;
    padding-top: 20px;
    padding-right: 20px;
  }
  .topRight {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

class NavBarLinksMobile extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    this.state = {
      showlinks: false,
      height: window.innerHeight,
      color: '#fc4242',
      colorX: RedX
    };
  }
  componentDidMount(props) {
    if (this.props.location.aboutProps) {
      if (this.props.location.aboutProps.color !== '') {
        this.setState({ color: this.props.location.aboutProps.color });
      }
      console.log(this.state.color);
      if (this.props.location.aboutProps.color === '#425bea') {
        this.setState({ colorX: BlueX });
      } else if (this.props.location.aboutProps.color === '#04ad84') {
        this.setState({ colorX: GreenX });
      }
      if (this.props.location.aboutProps.color === '#fc4242') {
        this.setState({ colorX: RedX });
      }
    }
  }
  goBack() {
    this.props.history.goBack();
  }
  handleWindowSizeChange = () => {
    this.setState({ height: window.innerHeight });
  };

  render() {
    const handleBurgerClick = () => {
      this.setState({ color: this.props.location.aboutProps.color });
    };
    return (
      <div style={{ height: this.state.height }}>
        <LinksStyle color={this.state.color}>
          <div className="topRight">
            <img
              src={this.state.colorX}
              alt="hello"
              className="xbutton"
              onClick={this.goBack}
            />
          </div>
          <div className="container">
            <div className="container-4">
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
        </LinksStyle>
      </div>
    );
  }
}
export default NavBarLinksMobile;
