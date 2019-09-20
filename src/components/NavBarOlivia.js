import React, { Component } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 1.1
  }
});

const NavBarStyle = styled.ul`
  background: white;
  color: ${props => props.color};
  font-size: 14px;
  position: sticky;
  top: 0;

  .container {
    overflow: hidden;
    padding-top: 15px;
    padding-bottom: 15px;
    position: flex;
    text-align: right;
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
    padding-left: 30px;
  }
  .column2 {
    display: flex;
    flex-direction: row;
    float: right;
    padding-top: 13px;
    padding-right: 0px;
    text-align: right;
  }
  .links {
    padding-right: 30px;
    padding-left: 30px;
  }
  .links-work {
    padding-right: 30px;
  }
  .contact {
    padding-right: 40px;
    padding-left: 20px;
  }
  .hoverlink {
  }
  .hoverlink:hover {
  }
  span {
  }
  .extra {
    padding-right: 10px;
  }
`;

export default class NavBarOlivia extends Component {
  render() {
    return (
      <NavBarStyle color={this.props.color}>
        <div className="container">
          <div className="column1">
            <Link to="/">
              <img src={this.props.Logo} className="logo" alt="bye" />
            </Link>
          </div>
          <div className="column2">
            <div style={{ 'text-align': 'center' }}>
              <Box>
                <Link
                  to={{ pathname: '/work', state: 'desiredState' }}
                  style={this.props.work}
                  className="links-work hoverlink"
                >
                  <span>work</span>
                </Link>
              </Box>
            </div>
            <div>
              <Box>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/rgbqueen/"
                  style={this.props.instagram}
                  className="links hoverlink"
                >
                  <span>latest</span>
                </a>
              </Box>
            </div>
            <div>
              <Box>
                <Link
                  to="/about"
                  style={this.props.about}
                  className="links hoverlink"
                >
                  <span className="extra">about</span>
                </Link>
              </Box>
            </div>
            <div>
              <Box>
                <Link
                  to="/contact"
                  style={this.props.contact}
                  className="contact hoverlink"
                >
                  <span>contact</span>
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </NavBarStyle>
    );
  }
}
