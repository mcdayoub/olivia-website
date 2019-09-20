import React, { Component } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const device = {
  mobileS: `(min-device-height: 300px) and (max-device-height: 569px)`,
  mobileM: `(min-device-height: 570px) and (max-device-height: 668px)`,
  mobileL: `(min-device-height: 669px) and (max-device-height: 813px)`,
  tablet: `(min-device-height: 1025px) and (max-device-height: 1280px)`
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
    height: 40px;
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
    height: 22px;
    padding-top: 8.25px;
  }
  @media ${device.mobileS} {
    .hamburger {
      height: 20px;
      padding-top: 8.25px;
    }
    .logo {
      height: 35px;
    }
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
