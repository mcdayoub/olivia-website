import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from './LogoRed.png';
import Hamburger from './HamburgerRed.png';
import Project1Preview from './Project1Preview.png';
import Project2Preview from './Project2Preview.png';
import Project1PreviewCopy from './Project1Previewcopy.png';
import Project2PreviewCopy from './Project2Previewcopy.png';

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
  background: white;
  color: black;

  .container {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    align-items: center;
  }

  .logo {
    height: 200px;
  }
  @media ${device.mobileS} {
    .polaroid {
      height: 350px;
    }
  }

  @media ${device.mobileM} {
    .polaroid {
      height: 400px;
    }
  }
  @media ${device.mobileL} {
    .polaroid {
      height: 450px;
    }
  }
  @media ${device.tablet} {
    .polaroid {
      height: 500px;
    }
  }
  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
  button {
    background-color: #04ad84;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Courier New';
  }
  .buttonDiv {
    padding-bottom: 20px;
  }
  * :focus {
    outline: 0 !important;
  }
  .title {
    font-size: 25px;
    font-weight: normal;
    border-bottom: 2px solid currentColor;
  }
  img {
    height: 200px;
  }
  .work-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  .work-preview-image {
    padding-top: 30px;
  }
`;
class WorkMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { didLoad: false };
  }
  onLoad = () => {
    this.setState({
      didLoad: true
    });
  };

  render() {
    const style = this.state.didLoad ? {} : { visibility: 'hidden' };
    return (
      <div style={{ height: '100%' }}>
        <MobileNavBarOlivia
          Logo={Logo}
          color={'#fc4242'}
          Hamburger={Hamburger}
        />
        <DisplayMobile>
          <div className="container" />
          <div className="work-column">
            <div className="work-preview-image">
              <Link to="/itsnotnuts">
                <img
                  style={style}
                  className="previewImage"
                  src={Project1PreviewCopy}
                  alt=""
                  onLoad={this.onLoad}
                />
              </Link>
            </div>
            <div className="work-preview-image">
              <img
                style={style}
                src={Project2PreviewCopy}
                alt="hello"
                onLoad={this.onLoad}
              />
            </div>
          </div>
        </DisplayMobile>
      </div>
    );
  }
}

export default WorkMobile;
