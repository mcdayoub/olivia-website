import React, { Component } from 'react';
import styled from 'styled-components';

import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoRed.png';
import Uparrow from './Uparrow.png';
import FadeIn from 'react-lazyload-fadein';

import { animateScroll as scroll } from 'react-scroll';

const size = {
  resize: '1000px'
};

const device = {
  resize: `(max-width: ${size.resize})`
};

const Display = styled.ul`
  background: white;
  color: black;
  .container {
    display: block;
    justify-content: flex-start;
    height: 100%;
    background: white;
  }
  .container-2 {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 35px;
  }
  .container-3 {
    display: flex;
    padding-left: 0px;
    flex-wrap: wrap;
    padding-top: 50px;
    justify-content: center;
    flex-direction: column;
  }
  .container-3::-webkit-scrollbar {
    display: none;
  }
  .photoDiv {
    padding: 5px;
  }
  .logo {
    height: 200px;
  }
  .polaroid {
    height: 500px;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
  .linkItem {
    padding-left: 25px;
    padding-bottom: 10px;
  }
  .resize {
    height: 300px;
    width: 300px;
  }
  .previewImage {
    height: 200px;
    width: 200px;
  }
  .title {
    font-size: 32px;
    font-weight: normal;
    border-bottom: 2px solid currentColor;
  }
  .subtitle {
    font-size: 16px;
    font-weight: normal;
  }
  .description {
    font-size: 13px;
    font-weight: normal;
  }
  .titleContainer {
    padding-top: 20px;
    text-align: center;
  }
  .subtitleContainer {
    padding-top: 15px;
    text-align: center;
  }
  .descriptionContainer {
    padding-top: 40px;
    justify-content: center;
    align-content: center;
    text-align: left;
    padding-bottom: 40px;
  }
  .descriptionColumnOne {
    width: 600px;
    margin: 0 auto;
    padding-bottom: 15px;
  }
  .descriptionColumnTwo {
    width: 600px;
    margin: 0 auto;
  }
  .imageContainer {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .imageContainer img {
    width: 1000px;
    padding-bottom: 50px;
  }
  .uparrow {
    padding-bottom: 50px;
    text-align: center;
    font-weight: normal;
    font-size: 12px;
  }
  .uparrow img {
    padding-bottom: 10px;
    height: 25px;
  }
  .uparrow h3 {
    font-weight: normal;
  }
  @media ${device.resize} {
    .container {
      display: flex;
      justify-content: flex-start;
      height: 100%;
    }
    .container-2 {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-left: 35px;
    }
    .container-3 {
      display: flex;
      flex-direction: row;
      padding-left: 0px;
      flex-wrap: wrap;
      padding-top: 50px;
      overflow-y: auto;
      justify-content: center;
    }
    .container-3::-webkit-scrollbar {
      display: none;
    }
    .photoDiv {
      padding: 5px;
    }
    .logo {
      height: 200px;
    }
    .polaroid {
      height: 500px;
    }
    a {
      text-decoration: none;
    }
    a:visited {
      color: black;
    }
    .linkItem {
      padding-left: 25px;
      padding-bottom: 10px;
    }
    .resize {
      height: 300px;
      width: 300px;
    }
    .previewImage {
      height: 200px;
      width: 200px;
    }
    .title {
      font-size: 32px;
      font-weight: normal;
      border-bottom: 2px solid currentColor;
    }
    .subtitle {
      font-size: 16px;
      font-weight: normal;
    }
    .description {
      font-size: 13px;
      font-weight: normal;
    }
    .titleContainer {
      text-align: center;
    }
    .subtitleContainer {
      padding-top: 15px;
      text-align: center;
    }
    .descriptionContainer {
      padding-top: 40px;
      justify-content: center;
      align-content: center;
      text-align: left;
      padding-bottom: 40px;
    }
    .descriptionColumnOne {
      width: 50%;
      margin: 0 auto;
      padding-bottom: 15px;
    }
    .descriptionColumnTwo {
      width: 50%;
      margin: 0 auto;
    }
    .imageContainer {
      text-align: center;
    }
    .imageContainer img {
      width: 100%;
      padding-bottom: 50px;
    }
    .uparrow {
      padding-bottom: 50px;
      text-align: center;
      font-weight: normal;
      font-size: 12px;
    }
    .uparrow img {
      padding-bottom: 10px;
      height: 25px;
    }
    .uparrow h3 {
      font-weight: normal;
    }
  }
`;

function Gallery(props) {
  const images = props.imgList.map(image => {
    return (
      <FadeIn
        height={600}
        render={onload => (
          <img
            alt="hello"
            src={image}
            onLoad={onload}
            className="galleryImage"
            offset={150}
          />
        )}
      />
    );
  });
  return (
    <div className="galleryDiv">
      <div className="titleContainer">
        <span className="title">{props.title}</span>
      </div>
      <div className="subtitleContainer">
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
      <div className="descriptionContainer">
        <div className="descriptionColumnOne">
          <h2 className="description">
            <span style={{ 'font-style': 'italic' }} className="italic">
              {props.italic2}
            </span>
            {props.descriptionOne}
          </h2>
        </div>
        <div className="descriptionColumnTwo">
          <h2 className="description">
            <span style={{ 'font-style': 'italic' }} className="italic">
              {props.italic}
            </span>
            {props.descriptionTwo}
          </h2>
        </div>
      </div>
      <div className="imageContainer">{images}</div>
    </div>
  );
}
const bold = { 'font-weight': 'bold' };

class LinkGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: '',
      width: window.innerWidth,
      widescreen: false,
      thinscreen: true
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    if (this.state.width < 1000) {
      this.setState({ widescreen: true, thinscreen: false });
    } else {
      this.setState({ widescreen: false, thinscreen: true });
    }
  };

  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <NavBarOlivia Logo={Logo} work={bold} color={'#fc4242'} />
        <Display>
          <div className="container">
            <div className="container-3">
              <Gallery
                className="gallery"
                imgList={this.props.photos}
                title={this.props.title}
                subtitle={this.props.subtitle}
                descriptionOne={this.props.descriptionOne}
                descriptionTwo={this.props.descriptionTwo}
                italic={this.props.italic}
                italic2={this.props.italic2}
              />
              <div
                className="uparrow"
                onClick={this.scrollToTop}
                style={{ 'padding-top': '50px' }}
              >
                <img src={Uparrow} alt="hello" />
                <h3>up please</h3>
              </div>
            </div>
          </div>
        </Display>
      </div>
    );
  }
}
export default LinkGallery;
