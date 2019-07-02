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
import DisplayRed from './DisplayRed';
import CenterImg from './Nuts/Nuts1.png';
import './index.css';
import CenterImgPicker from './CenterImgPicker';
import Image1 from './Nuts/Nuts1.png';
import Image2 from './Nuts/Nuts2.png';
import Image3 from './Nuts/Nuts3.png';
import Photo1 from './TDS/Photo1.png';
import { Redirect } from 'react-router';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Project1Preview from './Project1Preview.png';
import Project1PreviewCopy from './Project1Previewcopy.png';
import Project1PreviewCopy2 from './Project1Previewcopy2.png';

import Project2Preview from './Project2Preview.png';
import Project2PreviewCopy from './Project2Previewcopy.png';
import Project2PreviewCopy2 from './Project2Previewcopy2.png';

import LogoRedSpin from './LogoRedSpin.png';
import LogoGreenSpin from './LogoGreenSpin.png';
import LogoBlueSpin from './LogoBlueSpin.png';

const Display = styled.ul`
  background: white;
  color: black;
  height: 100%;
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
  span {
    text-decoration: none;
  }
`;

let imageListOne = [Nuts1, Nuts2, Nuts3, Photo1];

let imageListTwo = [
  './previews/bladee.png',
  './previews/bladee1.jpeg',
  './previews/bladee2.jpg'
];

let previewImages = ['./previews/one.png', './previews/bladee.png'];
const centerImages = [Image1, Image2, Image3];

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

const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      galleryIsHidden: true,
      centerImg: CenterImg,
      centerImgBoolean: false,
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: '',
      heightOfContainer: '100%',
      isHiddenImage1: true,
      isHiddenImage2: true,
      isHiddenImage3: true,
      selected: '',
      spinningLogo: LogoRedSpin,
      didLoadImg1: false,
      didLoadImg2: false,
      redirectToProject1: false,
      redirectToProject2: false
    };
    this.handleMouseOverImage1 = this.handleMouseOverImage1.bind(this);
    this.handleMouseOverImage2 = this.handleMouseOverImage2.bind(this);
    this.handleMouseOverImage3 = this.handleMouseOverImage3.bind(this);
  }
  //   componentDidMount(nextProps) {
  //     this.setState({
  //       isHidden: false,
  //       galleryIsHidden: true,
  //       centerImg: CenterImg,
  //       centerImgBoolean: false,
  //       photos: [],
  //       title: '',
  //       subtitle: '',
  //       description: '',
  //       descriptionOne: '',
  //       descriptionTwo: '',
  //       heightOfContainer: '100%',
  //       isHiddenImage1: true,
  //       isHiddenImage2: true,
  //       isHiddenImage3: true,
  //       selected: ''
  //     });
  //   }

  componentWillMount() {
    this.setState({
      isHidden: false,
      galleryIsHidden: true,
      centerImg: CenterImg,
      centerImgBoolean: false,
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: '',
      heightOfContainer: '100%',
      isHiddenImage1: true,
      isHiddenImage2: true,
      isHiddenImage3: true,
      selected: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state === 'desiredState') {
      this.setState({
        isHidden: false,
        galleryIsHidden: true,
        centerImg: CenterImg,
        centerImgBoolean: false,
        photos: [],
        title: '',
        subtitle: '',
        description: '',
        descriptionOne: '',
        descriptionTwo: '',
        heightOfContainer: '100%',
        isHiddenImage1: true,
        isHiddenImage2: true,
        isHiddenImage3: true,
        selected: ''
      });
    }
  }
  handleMouseOverImage1() {
    this.setState({
      spinningLogo: LogoGreenSpin,
      centerImgBoolean: true,
      centerImg: Project1Preview,
      isHiddenImage1: false,
      isHiddenImage2: true,
      isHiddenImage3: true
    });
  }
  handleMouseOverImage2() {
    this.setState({
      spinningLogo: LogoRedSpin,
      centerImgBoolean: true,
      centerImg: Project2PreviewCopy2,
      isHiddenImage1: true,
      isHiddenImage2: false,
      isHiddenImage3: true
    });
  }
  handleMouseOverImage3() {
    this.setState({
      spinningLogo: LogoBlueSpin,
      centerImgBoolean: true,
      centerImg: Image3,
      isHiddenImage1: true,
      isHiddenImage2: true,
      isHiddenImage3: false
    });
  }
  onLoadImg1 = () => {
    this.setState({
      didLoadImg1: true
    });
  };
  onLoadImg2 = () => {
    this.setState({
      didLoadImg2: true
    });
  };
  droppedImageOne(e) {
    e.containerElem.style.visibility = 'hidden';
    this.setState({ redirectToProject1: true });
  }
  droppedImageTwo(e) {
    e.containerElem.style.visibility = 'hidden';
    this.setState({ redirectToProject2: true });
  }

  render() {
    if (this.state.redirectToProject1) {
      return <Redirect push to="/itsnotnuts" />;
    }
    if (this.state.redirectToProject2) {
      return <Redirect push to="/tds" />;
    }
    const style1 = this.state.didLoadImg1 ? {} : { visibility: 'hidden' };
    const style2 = this.state.didLoadImg2 ? {} : { visibility: 'hidden' };

    const imageClickOne = () => {
      this.setState(state => ({
        isHidden: true,
        galleryIsHidden: false,
        heightOfContainer: '',
        photos: imageListOne,
        title: "IT'S NOT FUCKING NUTS",
        subtitle: 'business concept & branding',
        descriptionOne:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
        descriptionTwo:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
        selected: 'itsnotnuts'
      }));
    };
    const imageClickTwo = () => {
      this.setState(state => ({
        isHidden: true,
        galleryIsHidden: false,
        heightOfContainer: '',
        photos: imageListOne,
        title: 'TAQ DEL SOL',
        subtitle: 'business concept & branding',
        descriptionOne:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
        descriptionTwo:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie'
      }));
    };
    const imageClickThree = () => {
      this.setState(state => ({
        isHidden: true,
        galleryIsHidden: false,
        heightOfContainer: '',
        photos: imageListOne,
        title: 'BLADEE',
        subtitle: 'business concept & branding',
        descriptionOne:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
        descriptionTwo:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie'
      }));
    };
    let projects = (
      <div className="container-3">
        <DragDropContainer targetKey="foo">
          <div className="floating" onMouseOver={this.handleMouseOverImage1}>
            <span>
              <img
                className="previewImage"
                src={require('./previews/one.png')}
                alt=""
              />
            </span>
          </div>
        </DragDropContainer>
        <DragDropContainer targetKey="bar">
          <div className="floating" onMouseOver={this.handleMouseOverImage2}>
            <span>
              <Link
                to="/tds"
                style={{ 'text-decoration': 'none', color: 'black' }}
              >
                <img
                  className="previewImage"
                  src={require('./previews/bladee.png')}
                  alt=""
                />
                TDS
              </Link>
            </span>
          </div>
        </DragDropContainer>
        {/* <div onMouseOver={this.handleMouseOverImage3}>
          <span>
            <img
              className="previewImage"
              src={require('./previews/one.png')}
              alt=""
              onClick={() => imageClickThree()}
            />
            IT'S NOT NUTS
          </span>
        </div> */}
      </div>
    );
    let centerImageDiv = <div />;
    if (this.state.centerImgBoolean) {
      centerImageDiv = (
        <div className="container-2">
          <div hidden={this.state.isHiddenImage1}>
            <img
              className="centerImage"
              src={Project1PreviewCopy2}
              alt="hello"
              style={style1}
              onLoad={this.onLoadImg1}
            />
          </div>
          <div hidden={this.state.isHiddenImage2}>
            <img
              className="centerImage"
              src={Project2PreviewCopy2}
              alt="hello"
              style={style2}
              onLoad={this.onLoadImg2}
            />
          </div>
          <img
            className="centerImage"
            src={Image3}
            alt="hello"
            onClick={() => imageClickThree()}
            hidden={this.state.isHiddenImage3}
          />
        </div>
      );
    }

    return (
      <div style={{ height: this.state.heightOfContainer }}>
        <div id="preload" style={{ display: 'none' }}>
          <img src={Project1PreviewCopy2} alt="hello" />
          <img src={Project2PreviewCopy2} alt="hello" />
          <img src={LogoGreenSpin} alt="hello" />
          <img src={LogoBlueSpin} alt="hello" />
        </div>
        <NavBarOlivia
          Logo={Logo}
          work={bold}
          instagram={notbold}
          about={notbold}
          contact={notbold}
          color={'#fc4242'}
        />
        <div
          hidden={this.state.isHidden}
          style={{ height: 'calc(100% - 75px)' }}
        >
          <DisplayRed>
            <div className="containerForPreview">
              <div>{projects}</div>
              <DropTarget
                targetKey="foo"
                onHit={this.droppedImageOne.bind(this)}
              >
                <DropTarget
                  targetKey="bar"
                  onHit={this.droppedImageTwo.bind(this)}
                >
                  <div>
                    <div className="container-2-spin">
                      <img
                        className="centerImage-spin spin"
                        src={this.state.spinningLogo}
                        alt="hello"
                      />
                    </div>
                    <div>{centerImageDiv}</div>
                  </div>
                </DropTarget>
              </DropTarget>
            </div>
          </DisplayRed>
        </div>
        <div hidden={this.state.galleryIsHidden}>
          <Display>
            <div className="container">
              <div className="container-3">
                <Gallery
                  className="gallery"
                  imgList={this.state.photos}
                  title={this.state.title}
                  subtitle={this.state.subtitle}
                  descriptionOne={this.state.descriptionOne}
                  descriptionTwo={this.state.descriptionTwo}
                />
              </div>
            </div>
          </Display>
        </div>
      </div>
    );
  }
}

export default Work;
