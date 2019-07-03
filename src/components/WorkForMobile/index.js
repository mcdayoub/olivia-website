import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import request from 'superagent';
import Preview from './Preview';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
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
import posed from 'react-pose';

import Project1Preview from './Project1Preview.png';
import Project1PreviewCopy from './Project1Previewcopy.png';
import Project1PreviewCopy2 from './Project1Previewcopy2.png';

import Project2Preview from './Project2Preview.png';
import Project2PreviewCopy from './Project2Previewcopy.png';
import Project2PreviewCopy2 from './Project2Previewcopy2.png';

import LogoRedSpin from './LogoRedSpin.png';
import LogoGreenSpin from './LogoGreenSpin.png';
import LogoBlueSpin from './LogoBlueSpin.png';

//DOTS
import DotRed from './DotRed.png';
import DotGreen from './DotGreen.png';
import DotBlue from './DotBlue.png';

import Hamburger from './HamburgerRed.png';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  press: {
    scale: 1.1
  }
});

class WorkForMobile extends Component {
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
      redirectToProject2: false,
      height: window.innerHeight
    };
    this.handleMouseOverImage1 = this.handleMouseOverImage1.bind(this);

    this.handleMouseOverImage2 = this.handleMouseOverImage2.bind(this);

    this.handleMouseOverImage3 = this.handleMouseOverImage3.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ height: window.innerHeight });
  };

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

    let projects = (
      <div className="container-3">
        <DragDropContainer targetKey="foo">
          <Box onMouseOver={this.handleMouseOverImage1}>
            <div className="floating">
              <span>
                <img className="previewImage" src={DotGreen} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer targetKey="bar">
          <Box>
            <div
              className="floating-2"
              onMouseOver={this.handleMouseOverImage2}
            >
              <span>
                <img className="previewImage" src={DotRed} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer targetKey="foo">
          <Box onMouseOver={this.handleMouseOverImage1}>
            <div className="floating-3">
              <span>
                <img className="previewImage" src={DotGreen} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer targetKey="bar">
          <Box>
            <div
              className="floating-4"
              onMouseOver={this.handleMouseOverImage2}
            >
              <span>
                <img className="previewImage" src={DotRed} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer targetKey="foo">
          <Box onMouseOver={this.handleMouseOverImage1}>
            <div className="floating-5">
              <span>
                <img className="previewImage" src={DotGreen} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
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
            hidden={this.state.isHiddenImage3}
          />
        </div>
      );
    }

    return (
      <div style={{ height: this.state.height }}>
        <div id="preload" style={{ display: 'none' }}>
          <img src={Project1PreviewCopy2} alt="hello" />
          <img src={Project2PreviewCopy2} alt="hello" />
          <img src={LogoGreenSpin} alt="hello" />
          <img src={LogoBlueSpin} alt="hello" />
        </div>
        <MobileNavBarOlivia
          Logo={Logo}
          color={'#fc4242'}
          Hamburger={Hamburger}
        />

        <DisplayRed>
          <div className="containerForPreview">
            <div>{projects}</div>
            <DropTarget targetKey="foo" onHit={this.droppedImageOne.bind(this)}>
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
    );
  }
}

export default WorkForMobile;
