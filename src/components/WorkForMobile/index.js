import React, { Component } from 'react';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from '../Icons/LogoRed.png';
import Display from './Display';
import CenterImg from './Nuts/Nuts1.png';
import './index.css';

import { Redirect } from 'react-router';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import posed from 'react-pose';

import LogoRedSpin from '../Icons/LogoRedSpin.png';
import LogoGreenSpin from '../Icons/LogoGreenSpin.png';
import LogoBlueSpin from '../Icons/LogoBlueSpin.png';

//DOTS
import DotRed from '../Icons/DotRed.png';
import DotGreen from '../Icons/DotGreen.png';
import DotBlue from '../Icons/DotBlue.png';
//THUMBNAILS
import TDSThumbnail from '../WorkThumbnails/THUMBNAIL_1.png';
import INNThumbnail from '../WorkThumbnails/THUMBNAIL_2.png';
import MHCThumbnail from '../WorkThumbnails/THUMBNAIL_3.png';
import RECThumbnail from '../WorkThumbnails/THUMBNAIL_4.png';
import COCThumbnail from '../WorkThumbnails/THUMBNAIL_5.png';
import ThumbnailText from '../WorkThumbnails/THUMBNAIL_TEXT.png';

import Hamburger from '../Icons/HamburgerRed.png';

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
      centerImgBoolean: true,
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: '',
      heightOfContainer: '100%',
      isHiddenOriginal: false,
      isHiddenImage1: true,
      isHiddenImage2: true,
      isHiddenImage3: true,
      isHiddenImage4: true,
      isHiddenImage5: true,
      selected: '',
      spinningLogo: LogoRedSpin,
      didLoadSpinner: false,
      didLoadImg1: false,
      didLoadImg2: false,
      didLoadImg3: false,
      didLoadImg4: false,
      didLoadImg5: false,
      redirectToProject1: false,
      redirectToProject2: false,
      redirectToProject3: false,
      redirectToProject4: false,
      redirectToProject5: false,
      height: window.innerHeight
    };
    this.handleMouseOverImage1 = this.handleMouseOverImage1.bind(this);
    this.handleMouseOverImage2 = this.handleMouseOverImage2.bind(this);
    this.handleMouseOverImage3 = this.handleMouseOverImage3.bind(this);
    this.handleMouseOverImage4 = this.handleMouseOverImage4.bind(this);
    this.handleMouseOverImage5 = this.handleMouseOverImage5.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.setState({
      isHidden: false,
      galleryIsHidden: true,
      centerImg: CenterImg,
      centerImgBoolean: true,
      photos: [],
      title: '',
      subtitle: '',
      description: '',
      descriptionOne: '',
      descriptionTwo: '',
      heightOfContainer: '100%',
      isHiddenOriginal: false,
      isHiddenImage1: true,
      isHiddenImage2: true,
      isHiddenImage3: true,
      isHiddenImage4: true,
      isHiddenImage5: true,
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
        centerImgBoolean: true,
        photos: [],
        title: '',
        subtitle: '',
        description: '',
        descriptionOne: '',
        descriptionTwo: '',
        heightOfContainer: '100%',
        isHiddenOriginal: false,
        isHiddenImage1: true,
        isHiddenImage2: true,
        isHiddenImage3: true,
        isHiddenImage4: true,
        isHiddenImage5: true,
        selected: ''
      });
    }
  }
  handleMouseOverImage1() {
    this.setState((state, props) => {
      return {
        spinningLogo: LogoRedSpin,
        centerImgBoolean: true,
        centerImg: TDSThumbnail,
        isHiddenOriginal: true,
        isHiddenImage1: false,
        isHiddenImage2: true,
        isHiddenImage3: true,
        isHiddenImage4: true,
        isHiddenImage5: true
      };
    });
  }

  handleMouseOverImage2() {
    this.setState((state, props) => {
      return {
        spinningLogo: LogoGreenSpin,
        centerImgBoolean: true,
        centerImg: INNThumbnail,
        isHiddenOriginal: true,

        isHiddenImage1: true,
        isHiddenImage2: false,
        isHiddenImage3: true,
        isHiddenImage4: true,
        isHiddenImage5: true
      };
    });
  }
  handleMouseOverImage3() {
    this.setState((state, props) => {
      return {
        spinningLogo: LogoBlueSpin,
        centerImgBoolean: true,
        centerImg: MHCThumbnail,
        isHiddenOriginal: true,

        isHiddenImage1: true,
        isHiddenImage2: true,
        isHiddenImage3: false,
        isHiddenImage4: true,
        isHiddenImage5: true
      };
    });
  }
  handleMouseOverImage4() {
    this.setState((state, props) => {
      return {
        spinningLogo: LogoRedSpin,
        centerImgBoolean: true,
        centerImg: RECThumbnail,
        isHiddenOriginal: true,

        isHiddenImage1: true,
        isHiddenImage2: true,
        isHiddenImage3: true,
        isHiddenImage4: false,
        isHiddenImage5: true
      };
    });
  }
  handleMouseOverImage5() {
    this.setState((state, props) => {
      return {
        spinningLogo: LogoGreenSpin,
        centerImgBoolean: true,
        centerImg: COCThumbnail,
        isHiddenOriginal: true,
        isHiddenImage1: true,
        isHiddenImage2: true,
        isHiddenImage3: true,
        isHiddenImage4: true,
        isHiddenImage5: false
      };
    });
  }
  onLoadImgSpinner = () => {
    this.setState({
      didLoadSpinner: true
    });
  };
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
  onLoadImg3 = () => {
    this.setState({
      didLoadImg3: true
    });
  };
  onLoadImg4 = () => {
    this.setState({
      didLoadImg4: true
    });
  };

  onLoadImg5 = () => {
    this.setState({
      didLoadImg5: true
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
  droppedImageThree(e) {
    e.containerElem.style.visibility = 'hidden';
    this.setState({ redirectToProject3: true });
  }
  droppedImageFour(e) {
    e.containerElem.style.visibility = 'hidden';
    this.setState({ redirectToProject4: true });
  }
  droppedImageFive(e) {
    e.containerElem.style.visibility = 'hidden';
    this.setState({ redirectToProject5: true });
  }

  render() {
    if (this.state.redirectToProject1) {
      return <Redirect push to="/tds" />;
    }
    if (this.state.redirectToProject2) {
      return <Redirect push to="/itsnotnuts" />;
    }
    if (this.state.redirectToProject3) {
      return <Redirect push to="/mhc" />;
    }
    if (this.state.redirectToProject4) {
      return <Redirect push to="/recovered" />;
    }
    if (this.state.redirectToProject5) {
      return <Redirect push to="/clarkston" />;
    }
    const style_spinner = this.state.didLoadSpinner
      ? {}
      : { visibility: 'hidden' };
    const style1 = this.state.didLoadImg1 ? {} : { visibility: 'hidden' };
    const style2 = this.state.didLoadImg2 ? {} : { visibility: 'hidden' };
    const style3 = this.state.didLoadImg3 ? {} : { visibility: 'hidden' };
    const style4 = this.state.didLoadImg4 ? {} : { visibility: 'hidden' };
    const style5 = this.state.didLoadImg5 ? {} : { visibility: 'hidden' };
    let projects = (
      <div className="container-3">
        <DragDropContainer
          targetKey="1"
          onDragStart={this.handleMouseOverImage1}
        >
          <Box onMouseOver={this.handleMouseOverImage1}>
            <div className="floating">
              <span>
                <img className="previewImage" src={DotRed} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer
          targetKey="2"
          onDragStart={this.handleMouseOverImage2}
        >
          <Box>
            <div
              className="floating-2"
              onMouseOver={this.handleMouseOverImage2}
            >
              <span>
                <img className="previewImage" src={DotGreen} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer
          targetKey="3"
          onDragStart={this.handleMouseOverImage3}
        >
          <Box onMouseOver={this.handleMouseOverImage3}>
            <div className="floating-3">
              <span>
                <img className="previewImage" src={DotBlue} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer
          targetKey="4"
          onDragStart={this.handleMouseOverImage4}
        >
          <Box>
            <div
              className="floating-4"
              onMouseOver={this.handleMouseOverImage4}
            >
              <span>
                <img className="previewImage" src={DotRed} alt="" />
              </span>
            </div>
          </Box>
        </DragDropContainer>
        <DragDropContainer
          targetKey="5"
          onDragStart={this.handleMouseOverImage5}
        >
          <Box onMouseOver={this.handleMouseOverImage5}>
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
    centerImageDiv = (
      <div className="container-2">
        <div hidden={this.state.isHiddenOriginal}>
          <img
            className="centerImage"
            src={ThumbnailText}
            alt="hello"
            onLoad={this.onLoadImgOriginal}
          />
        </div>
        <div hidden={this.state.isHiddenImage1}>
          <img
            className="centerImage"
            src={TDSThumbnail}
            alt="hello"
            style={style1}
            onLoad={this.onLoadImg1}
          />
        </div>
        <div hidden={this.state.isHiddenImage2}>
          <img
            className="centerImage"
            src={INNThumbnail}
            alt="hello"
            style={style2}
            onLoad={this.onLoadImg2}
          />
        </div>
        <div hidden={this.state.isHiddenImage3}>
          <img
            className="centerImage"
            src={MHCThumbnail}
            alt="hello"
            style={style3}
            onLoad={this.onLoadImg3}
          />
        </div>
        <div hidden={this.state.isHiddenImage4}>
          <img
            className="centerImage"
            src={RECThumbnail}
            alt="hello"
            style={style4}
            onLoad={this.onLoadImg4}
          />
        </div>
        <div hidden={this.state.isHiddenImage5}>
          <img
            className="centerImage"
            src={COCThumbnail}
            alt="hello"
            style={style5}
            onLoad={this.onLoadImg5}
          />
        </div>
      </div>
    );

    return (
      <div style={{ height: this.state.height }}>
        <div id="preload" style={{ display: 'none' }}>
          <img src={ThumbnailText} alt="hello" />
          <img src={LogoRedSpin} alt="hello" />
          <img src={LogoGreenSpin} alt="hello" />
          <img src={LogoBlueSpin} alt="hello" />
          <img src={TDSThumbnail} alt="hello" />
          <img src={INNThumbnail} alt="hello" />
          <img src={MHCThumbnail} alt="hello" />
          <img src={RECThumbnail} alt="hello" />
          <img src={COCThumbnail} alt="hello" />
        </div>
        <MobileNavBarOlivia
          Logo={Logo}
          color={'#fc4242'}
          Hamburger={Hamburger}
        />

        <Display>
          <div className="containerForPreview">
            <div>{projects}</div>
            <DropTarget targetKey="1" onHit={this.droppedImageOne.bind(this)}>
              <DropTarget targetKey="2" onHit={this.droppedImageTwo.bind(this)}>
                <DropTarget
                  targetKey="3"
                  onHit={this.droppedImageThree.bind(this)}
                >
                  <DropTarget
                    targetKey="4"
                    onHit={this.droppedImageFour.bind(this)}
                  >
                    <DropTarget
                      targetKey="5"
                      onHit={this.droppedImageFive.bind(this)}
                    >
                      <div>
                        <div className="container-2-spin">
                          <img
                            className="centerImage-spin spin"
                            src={this.state.spinningLogo}
                            alt="hello"
                            onLoad={this.onLoadImgSpinner}
                            style={style_spinner}
                          />
                        </div>
                        <div>{centerImageDiv}</div>
                      </div>
                    </DropTarget>
                  </DropTarget>
                </DropTarget>
              </DropTarget>
            </DropTarget>
          </div>
        </Display>
      </div>
    );
  }
}

export default WorkForMobile;
