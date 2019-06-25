import React, { Component } from 'react';
import styled from 'styled-components';

import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoRed.png';

const Display = styled.ul`
  background: white;
  color: black;
  /* .whiteBar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    z-index: 100;
    background-color: white;
  } */
  .whiteBar2 {
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 100;
    background-color: white;
  }
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
    padding-top: 100px;
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
    font-size: 12px;
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
    display: flex;
    padding-top: 40px;
    justify-content: center;
    text-align: left;
    padding-bottom: 40px;
  }
  .descriptionColumnOne {
    flex-direction: column;
    float: left;
    width: 28%;
    padding-right: 10px;
  }
  .descriptionColumnTwo {
    flex-direction: column;
    float: right;
    width: 28%;
    padding-left: 10px;
  }
  .imageContainer {
    text-align: center;
  }
  .imageContainer img {
    width: 1000px;
    padding-bottom: 50px;
  }
`;
function Gallery(props) {
  const images = props.imgList.map(image => {
    return <img className="galleryImage" key={image} src={image} alt="" />;
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
        <div className="descriptionColumnTwo">
          <h3 className="description">{props.descriptionTwo}</h3>
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
      descriptionOne: '',
      descriptionTwo: ''
    };
  }
  render() {
    return (
      <div>
        <NavBarOlivia
          Logo={Logo}
          work={bold}
          instagram={notbold}
          about={notbold}
          contact={notbold}
          color={'#fc4242'}
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
                descriptionTwo={this.props.descriptionTwo}
              />
            </div>
          </div>
        </Display>
      </div>
    );
  }
}
export default LinkGallery;