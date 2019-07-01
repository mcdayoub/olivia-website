import React, { Component } from 'react';
import styled from 'styled-components';

import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from './LogoRed.png';
import Hamburger from './HamburgerRed.png';
import Uparrow from './Uparrow.png';
import FadeIn from 'react-lazyload-fadein';

import { animateScroll as scroll } from 'react-scroll';

const Display = styled.ul`
  background: white;
  color: black;

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
    font-size: 25px;
    font-weight: normal;
    border-bottom: 2px solid currentColor;
  }
  .subtitle {
    font-size: 16px;
    font-weight: normal;
  }
  .description {
    font-size: 12px;
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
    display: flex;
    padding-top: 30px;
    justify-content: center;
    text-align: left;
    padding-bottom: 30px;
  }
  .descriptionColumnOne {
    width: 75%;
    padding-right: 10px;
    align-content: center;
    align-items: center;
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
  }
  .uparrow h3 {
    font-weight: normal;
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
            offset={1000}
          />
        )}
      />
    );
  });
  return (
    <div>
      <div className="titleContainer">
        <span className="title">{props.title}</span>
      </div>
      <div className="subtitleContainer">
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
      <div className="descriptionContainer">
        <div className="descriptionColumnOne">
          <h3 className="description">{props.descriptionOne}</h3>
        </div>
      </div>
      <div className="imageContainer">{images}</div>
    </div>
  );
}
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };
class LinkGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: ''
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <MobileNavBarOlivia
          Logo={Logo}
          work={bold}
          instagram={notbold}
          about={notbold}
          contact={notbold}
          color={'#fc4242'}
          Hamburger={Hamburger}
        />
        <Display>
          <div className="container">
            <div className="container-3">
              <Gallery
                className="gallery"
                imgList={this.props.photos}
                title={this.props.title}
                subtitle={this.props.subtitle}
                descriptionOne={this.props.descriptionOne}
              />
              <div className="uparrow" onClick={this.scrollToTop}>
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
