import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import request from 'superagent';
import Preview from './Preview';
import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoRed.png';
import Nuts1 from './Nuts/Nuts1.png';
import Nuts2 from './Nuts/Nuts2.png';
import Nuts3 from './Nuts/Nuts3.png';

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
    padding-top: 0px;
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

let imageListOne = [Nuts1, Nuts2, Nuts3];

let imageListTwo = [
  './previews/bladee.png',
  './previews/bladee1.jpeg',
  './previews/bladee2.jpg'
];

let previewImages = ['./previews/one.png', './previews/bladee.png'];

// let previewList = {
//   projectOne: {
//     src: './previews/one.png',
//     gallery: imageListOne
//   },
//   projectTwo: {
//     src: './previews/bladee.png',
//     gallery: imageListTwo
//   }
// };

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

function PreviewPhotos() {
  const imageClickOne = () => {
    this.setState(state => ({
      photos: imageListOne,
      title: 'Project One',
      description:
        'Wench trysail sloop man-of-war. Spike coffer topsail long clothes. Pink bilge pirate dead men tell no tales. Chandler piracy swing the lead hulk.',
      previewPhotos: false
    }));
  };
  const imageClickTwo = () => {
    this.setState(state => ({
      photos: imageListTwo,
      title: 'Project Two',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      previewPhotos: true
    }));
  };
  return (
    <div className="container-3">
      <img
        className="previewImage"
        src={require('./previews/one.png')}
        alt=""
        onClick={() => imageClickOne()}
      />
      <img
        className="previewImage"
        src={require('./previews/bladee.png')}
        alt=""
        onClick={() => imageClickTwo()}
      />
    </div>
  );
}

const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewPhotos: true,
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: ''
    };
  }

  render() {
    const imageClickOne = () => {
      this.setState(state => ({
        previewPhotos: false,
        photos: imageListOne,
        title: "IT'S NOT FUCKING NUTS",
        subtitle: 'business concept & branding',
        descriptionOne:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
        descriptionTwo:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie'
      }));
    };
    const imageClickTwo = () => {
      this.setState(state => ({
        previewPhotos: false,
        photos: imageListTwo,
        title: 'Project Two',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum'
      }));
    };
    let projects = <div />;
    if (this.state.previewPhotos) {
      projects = (
        <div>
          <img
            className="previewImage"
            src={require('./previews/one.png')}
            alt=""
            onClick={() => imageClickOne()}
          />
          <img
            className="previewImage"
            src={require('./previews/bladee.png')}
            alt=""
            onClick={() => imageClickTwo()}
          />
        </div>
      );
    }
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
          <div className="whiteBar" />
          <div className="container">
            <div className="container-3">
              <div>{projects}</div>
              <Gallery
                className="gallery"
                imgList={this.state.photos}
                title={this.state.title}
                subtitle={this.state.subtitle}
                descriptionOne={this.state.descriptionOne}
                descriptionTwo={this.state.descriptionTwo}
                action={this.state.action}
              />
            </div>
          </div>
          <div className="whiteBar2" />
        </Display>
      </div>
    );
  }
}

export default Work;
