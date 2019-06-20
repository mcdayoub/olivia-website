import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import request from 'superagent';
import Preview from './Preview';
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
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 100;
    background-color: white;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    height: 100vh;
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
  .galleryImage {
    padding: 10px;
    height: 100px;
    width: 100px;
  }
  .container-3::-webkit-scrollbar {
    display: none;
  }
  .photoDiv {
    padding: 5px;
  }
  img {
    height: 400px;
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
`;

let imageListOne = [
  './previews/four.png',
  './previews/one.png',
  './previews/one.png',
  './previews/polaroid.png'
];

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
    return (
      <img
        className="galleryImage"
        key={image}
        src={require('' + image)}
        alt=""
      />
    );
  });
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <div>{images}</div>
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
        src={require('./previews/one.png')}
        alt=""
        onClick={() => imageClickOne()}
      />
      <img
        src={require('./previews/bladee.png')}
        alt=""
        onClick={() => imageClickTwo()}
      />
    </div>
  );
}

const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewPhotos: true,
      photos: [],
      title: '',
      description: ''
    };
  }

  render() {
    const imageClickOne = () => {
      this.setState(state => ({
        previewPhotos: false,
        photos: imageListOne,
        title: 'Project One',
        description:
          'Wench trysail sloop man-of-war. Spike coffer topsail long clothes. Pink bilge pirate dead men tell no tales. Chandler piracy swing the lead hulk.'
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
            src={require('./previews/one.png')}
            alt=""
            onClick={() => imageClickOne()}
          />
          <img
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
            <div className="container-2">
              <Link to="/">
                <img
                  className="logo"
                  src={require('../../weblogoolivia-01.png')}
                  alt="hello"
                />
              </Link>
              <div className="linkItem">
                <Link to="/work">work--></Link>
              </div>
              <div className="linkItem">
                <Link to="/about">about</Link>
              </div>
              <div className="linkItem">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/rgbqueen/"
                >
                  instagram
                </a>
              </div>
              <div className="linkItem">
                <Link to="/contact">contact</Link>
              </div>
            </div>
            <div className="container-3">
              <div>{projects}</div>
              <Gallery
                className="gallery"
                imgList={this.state.photos}
                title={this.state.title}
                description={this.state.description}
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

export default Instagram;
