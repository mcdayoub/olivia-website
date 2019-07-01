import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './weblogoolivia-01.png';
import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from 'styled-components';

//TRANSITION IMPORTS
import posed, { PoseGroup } from 'react-pose';

//WEB IMPORTS
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import LinkGallery from './components/WorkLink';
import Nuts1 from './components/Work/Nuts/Nuts1.png';
import Nuts2 from './components/Work/Nuts/Nuts2.png';
import Nuts3 from './components/Work/Nuts/Nuts3.png';
import Project1Preview from './components/Work/Project1Preview.png';
import Project2Preview from './components/Work/Project2Preview.png';

//MOBILE IMPORTS
import HomeMobile from './components/HomeMobile';
import AboutMobile from './components/AboutMobile';
import ContactFormMobile from './components/ContactMobile';
import NavBarLinksMobile from './components/NavBarLinks';
import WorkMobile from './components/WorkMobile';
import LinkGalleryMobile from './components/WorkLinkMobile';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

//PROJECT IMPORTS
//TDS IMPORTS
import TDS1 from './components/TDS/Images/TAQUERIADELSOL_1.png';
import TDS2 from './components/TDS/Images/TAQUERIADELSOL_2.png';
import TDS3 from './components/TDS/Images/TAQUERIADELSOL_3.png';
import TDS4 from './components/TDS/Images/TAQUERIADELSOL_4.png';
import TDS5 from './components/TDS/Images/TAQUERIADELSOL_5.png';
import TDS6 from './components/TDS/Images/TAQUERIADELSOL_6.png';

//PROJECT IMAGE LISTS
const imgList = [Project1Preview, Project2Preview, Nuts1, Nuts2, Nuts3];
const TDSImgList = [TDS1, TDS2, TDS3, TDS4, TDS5, TDS6];

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 810;
    if (!isMobile) {
      return (
        <div className="App" style={{ height: '100%' }}>
          <div id="preload" style={{ display: 'none' }}>
            <img src={TDS1} alt="hello" />
            <img src={TDS2} alt="hello" />
            <img src={TDS3} alt="hello" />
          </div>
          <Router>
            <Route
              style={{ height: '100%' }}
              render={({ location }) => (
                <PoseGroup>
                  <RouteContainer
                    key={location.pathname}
                    style={{ height: '100%' }}
                  >
                    <Switch location={location}>
                      <Route
                        exact={true}
                        path="/"
                        component={Home}
                        key="home"
                      />
                      <Route
                        exact={true}
                        path="/about"
                        component={About}
                        key="about"
                      />
                      <Route path="/work" component={Work} key="work" />
                      <Route
                        exact={true}
                        path="/instagram"
                        component={Instagram}
                        key="instagram"
                      />
                      <Route
                        exact={true}
                        path="/contact"
                        component={Contact}
                        key="contact"
                      />
                      <Route
                        path="/itsnotnuts"
                        key="itsnotnuts"
                        render={() => (
                          <LinkGallery
                            photos={imgList}
                            title="IT'S NOT NUTS"
                            subtitle="business concept & branding"
                            descriptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie"
                          />
                        )}
                      />
                      <Route
                        path="/tds"
                        key="tds"
                        render={() => (
                          <LinkGallery
                            photos={TDSImgList}
                            title="TAQUERÍA DEL SOL"
                            subtitle="business concept & branding"
                            descriptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie"
                            descriptionTwo="fuck you"
                          />
                        )}
                      />
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              )}
            />
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <Router>
            <Route
              style={{ height: '100%' }}
              render={({ location }) => (
                <PoseGroup>
                  <RouteContainer
                    key={location.pathname}
                    style={{ height: '100%' }}
                  >
                    <Switch location={location}>
                      <Route exact={true} path="/" component={HomeMobile} />
                      <Route
                        exact={true}
                        path="/about"
                        component={AboutMobile}
                      />
                      <Route
                        exact={true}
                        path="/contact"
                        component={ContactFormMobile}
                      />
                      <Route
                        exact={true}
                        path="/navmobile"
                        component={NavBarLinksMobile}
                      />
                      <Route exact={true} path="/work" component={WorkMobile} />
                      <Route
                        path="/itsnotnuts"
                        render={() => (
                          <LinkGalleryMobile
                            photos={imgList}
                            title="IT'S NOT NUTS"
                            subtitle="business concept & branding"
                            descriptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie"
                          />
                        )}
                      />
                      <Route
                        path="/tds"
                        render={() => (
                          <LinkGalleryMobile
                            photos={TDSImgList}
                            title="TAQUERÍA DEL SOL"
                            subtitle="business concept & branding"
                            descriptionOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie"
                          />
                        )}
                      />
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              )}
            />
          </Router>
        </div>
      );
    }
  }
}

export default App;
