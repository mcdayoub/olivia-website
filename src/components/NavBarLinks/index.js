import React, { Component } from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RedX from './RedX.png';

const size = {
  mobileS: '550px',
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
      padding-bottom: 7%;
    }
  }
  @media ${device.mobileM} {
    .nav-items {
      padding-bottom: 12%;
    }
  }
  @media ${device.mobileL} {
    .nav-items {
      padding-bottom: 13%;
    }
  }
  @media ${device.tablet} {
    .nav-items {
      padding-bottom: 13%;
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
    padding-top: 200px;
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
      color: '#fc4242'
    };
  }
  componentDidMount(props) {
    if (this.props.location.aboutProps) {
      if (this.props.location.aboutProps.color !== '') {
        this.setState({ color: this.props.location.aboutProps.color });
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
              src={RedX}
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
        </LinksStyle>
      </div>
    );
  }
}
export default NavBarLinksMobile;
