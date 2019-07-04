import React, { Component } from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    flex-direction: column;
    float: right;
    padding-top: 13px;
    padding-right: 0px;
    text-align: right;
  }
  .links {
    padding-right: 60px;
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
            <Link
              to={{ pathname: '/work', state: 'desiredState' }}
              style={this.props.work}
            >
              work
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rgbqueen/"
              style={this.props.instagram}
            >
              latest
            </a>
            <Link to="/about" style={this.props.about}>
              about
            </Link>
            <Link to="/contact" style={this.props.contact}>
              contact
            </Link>
          </div>
        </div>
      </NavBarStyle>
    );
  }
}
