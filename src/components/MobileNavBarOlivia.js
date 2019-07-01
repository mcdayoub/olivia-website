import React, { Component } from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const size = {
  mobileS: '667px',
  mobileM: '600px',
  mobileL: '736px',
  tablet: '834px'
};

const device = {
  mobileS: `(min-height: ${size.mobileS})`,
  mobileM: `(min-height: ${size.mobileM})`,
  mobileL: `(min-height: ${size.mobileL})`,
  tablet: `(min-height: ${size.tablet})`
};

const NavBarStyle = styled.ul`
  background: white;
  color: ${props => props.color};
  font-size: 16px;
  top: 0;

  .container {
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 5px;
    position: flex;
  }
  .logo {
    height: 50px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    color: ${props => props.color};
  }
  .column1 {
    flex-direction: column;
    float: left;
    padding-left: 5px;
  }
  .column2 {
    flex-direction: column;
    float: right;
    padding-right: 15px;
  }
  .links {
    padding-right: 60px;
  }
  .hamburger {
    height: 30px;
    padding-top: 8.25px;
  }
`;

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
      padding-bottom: 12%;
    }
  }
  @media ${device.mobileS} {
    .nav-items {
      padding-bottom: 10%;
    }
  }

  .container-4 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    text-align: center;
    height: 100vh;
  }
`;

class MobileNavBarOlivia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showlinks: false,
      color: this.props.color
    };
  }

  render() {
    const handleBurgerClick = () => {
      this.setState({ showlinks: true });
    };
    return (
      <div>
        <NavBarStyle color={this.props.color}>
          <div className="container">
            <div className="column1">
              <Link to="/">
                <img src={this.props.Logo} className="logo" alt="bye" />
              </Link>
            </div>
            <div className="column2">
              <Link
                to={{
                  pathname: '/navmobile',
                  aboutProps: { color: this.props.color }
                }}
              >
                <img
                  src={this.props.Hamburger}
                  className="hamburger"
                  alt="bye"
                />
              </Link>
            </div>
          </div>
        </NavBarStyle>
      </div>
    );
  }
}
export default MobileNavBarOlivia;
