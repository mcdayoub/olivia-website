import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//PRELOAD LOGO

//PRELOAD POLAROID
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
import WorkMOBILETRIAL from './components/WorkMOBILETRIAL';
import WorkForMobile from './components/WorkForMobile';

//PROJECT IMPORTS
//TDS IMPORTS - BOTH WEB AND MOBILE
import TDS1 from './components/TDS/Images/TAQUERIADELSOL_1.jpg';
import TDS2 from './components/TDS/Images/TAQUERIADELSOL_2.jpg';
import TDS3 from './components/TDS/Images/TAQUERIADELSOL_3.jpg';
import TDS4 from './components/TDS/Images/TAQUERIADELSOL_4.jpg';
import TDS5 from './components/TDS/Images/TAQUERIADELSOL_5.jpg';
import TDS6 from './components/TDS/Images/TAQUERIADELSOL_6.jpg';

//CLARKSTON IMPORTS
//WEB
import C1 from './components/Clarkston/ImagesWeb/Clarkston_Website-01.jpg';
import C2 from './components/Clarkston/ImagesWeb/Clarkston_Website-02.jpg';
import C3 from './components/Clarkston/ImagesWeb/Clarkston_Website-03.jpg';
import C4 from './components/Clarkston/ImagesWeb/Clarkston_Website-04.jpg';
import C5 from './components/Clarkston/ImagesWeb/Clarkston_Website-05.jpg';
import C6 from './components/Clarkston/ImagesWeb/Clarkston_Website-06.jpg';
import C7 from './components/Clarkston/ImagesWeb/Clarkston_Website-07.jpg';
import C8 from './components/Clarkston/ImagesWeb/Clarkston_Website-08.jpg';
import C9 from './components/Clarkston/ImagesWeb/Clarkston_Website-09.jpg';
import C10 from './components/Clarkston/ImagesWeb/Clarkston_Website-10.jpg';
//MOBILE
import CMobile1 from './components/Clarkston/ImagesMobile/Clarkston_Website-01.jpg';
import CMobile2 from './components/Clarkston/ImagesMobile/Clarkston_Website-02.jpg';
import CMobile3 from './components/Clarkston/ImagesMobile/Clarkston_Website-03.jpg';
import CMobile4 from './components/Clarkston/ImagesMobile/Clarkston_Website-04.jpg';
import CMobile5 from './components/Clarkston/ImagesMobile/Clarkston_Website-05.jpg';
import CMobile6 from './components/Clarkston/ImagesMobile/Clarkston_Website-06.jpg';
import CMobile7 from './components/Clarkston/ImagesMobile/Clarkston_Website-07.jpg';
import CMobile8 from './components/Clarkston/ImagesMobile/Clarkston_Website-08.jpg';
import CMobile9 from './components/Clarkston/ImagesMobile/Clarkston_Website-09.jpg';
import CMobile10 from './components/Clarkston/ImagesMobile/Clarkston_Website-10.jpg';
import CMobile11 from './components/Clarkston/ImagesMobile/Clarkston_Website-11.jpg';
import CMobile12 from './components/Clarkston/ImagesMobile/Clarkston_Website-12.jpg';
import CMobile13 from './components/Clarkston/ImagesMobile/Clarkston_Website-13.jpg';
import CMobile14 from './components/Clarkston/ImagesMobile/Clarkston_Website-14.jpg';

//RECOVERED IMPORTS
//WEB
import R1 from './components/Recovered/ImagesWeb/Recovered_Website-01.jpg';
import R2 from './components/Recovered/ImagesWeb/Recovered_Website-02.jpg';
import R3 from './components/Recovered/ImagesWeb/Recovered_Website-03.jpg';
import R4 from './components/Recovered/ImagesWeb/Recovered_Website-04.jpg';
import R5 from './components/Recovered/ImagesWeb/Recovered_Website-05.jpg';
import R6 from './components/Recovered/ImagesWeb/Recovered_Website-06.jpg';
import R7 from './components/Recovered/ImagesWeb/Recovered_Website-07.jpg';
//MOBILE
import R1Mobile from './components/Recovered/ImagesMobile/Recovered_Website-01.jpg';
import R2Mobile from './components/Recovered/ImagesMobile/Recovered_Website-02.jpg';
import R3Mobile from './components/Recovered/ImagesMobile/Recovered_Website-03.jpg';
import R4Mobile from './components/Recovered/ImagesMobile/Recovered_Website-04.jpg';
import R5Mobile from './components/Recovered/ImagesMobile/Recovered_Website-05.jpg';
import R6Mobile from './components/Recovered/ImagesMobile/Recovered_Website-06.jpg';
import R7Mobile from './components/Recovered/ImagesMobile/Recovered_Website-07.jpg';
import R8Mobile from './components/Recovered/ImagesMobile/Recovered_Website-08.jpg';
import R9Mobile from './components/Recovered/ImagesMobile/Recovered_Website-09.jpg';
import R10Mobile from './components/Recovered/ImagesMobile/Recovered_Website-10.jpg';
import R11Mobile from './components/Recovered/ImagesMobile/Recovered_Website-11.jpg';

//MHC IMPORTS
//WEB
import M1 from './components/MHC/ImagesWeb/MHC_Website-01.jpg';
import M2 from './components/MHC/ImagesWeb/MHC_Website-02.jpg';
import M3 from './components/MHC/ImagesWeb/MHC_Website-03.jpg';
import M4 from './components/MHC/ImagesWeb/MHC_Website-04.jpg';
import M5 from './components/MHC/ImagesWeb/MHC_Website-05.jpg';
import M6 from './components/MHC/ImagesWeb/MHC_Website-06.jpg';
import M7 from './components/MHC/ImagesWeb/MHC_Website-07.jpg';
//MOBILE
import M1Mobile from './components/MHC/ImagesMobile/MHC_Website-01.jpg';
import M2Mobile from './components/MHC/ImagesMobile/MHC_Website-02.jpg';
import M3Mobile from './components/MHC/ImagesMobile/MHC_Website-03.jpg';
import M4Mobile from './components/MHC/ImagesMobile/MHC_Website-04.jpg';
import M5Mobile from './components/MHC/ImagesMobile/MHC_Website-05.jpg';
import M6Mobile from './components/MHC/ImagesMobile/MHC_Website-06.jpg';
import M7Mobile from './components/MHC/ImagesMobile/MHC_Website-07.jpg';
import M8Mobile from './components/MHC/ImagesMobile/MHC_Website-08.jpg';
import M9Mobile from './components/MHC/ImagesMobile/MHC_Website-09.jpg';
import M10Mobile from './components/MHC/ImagesMobile/MHC_Website-10.jpg';
import M11Mobile from './components/MHC/ImagesMobile/MHC_Website-11.jpg';
import M12Mobile from './components/MHC/ImagesMobile/MHC_Website-12.jpg';
import M13Mobile from './components/MHC/ImagesMobile/MHC_Website-13.jpg';
import M14Mobile from './components/MHC/ImagesMobile/MHC_Website-14.jpg';

//INN
import INN1 from './components/INN/ImagesWeb/INN_1.jpg';
import INN2 from './components/INN/ImagesWeb/INN_2.jpg';
import INN3 from './components/INN/ImagesWeb/INN_3.jpg';
import INN4 from './components/INN/ImagesWeb/INN_4.jpg';
import INN5 from './components/INN/ImagesWeb/INN_5.jpg';
import INN6 from './components/INN/ImagesWeb/INN_6.jpg';
import INN7 from './components/INN/ImagesWeb/INN_7.jpg';
import INN8 from './components/INN/ImagesWeb/INN_8.jpg';

//PROJECT IMAGE LISTS
const imgList = [Project1Preview, Project2Preview, Nuts1, Nuts2, Nuts3];

const TDSImgList = [TDS1, TDS2, TDS3, TDS4, TDS5, TDS6];
const ClarkstonImageListWeb = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10];
const ClarkstonImageListMobile = [
  CMobile1,
  CMobile2,
  CMobile3,
  CMobile4,
  CMobile5,
  CMobile6,
  CMobile7,
  CMobile8,
  CMobile9,
  CMobile10,
  CMobile11,
  CMobile12,
  CMobile13,
  CMobile14
];
const RecoveredImageListWeb = [R1, R2, R3, R4, R5, R6, R7];
const RecoveredImageListMobile = [
  R1Mobile,
  R2Mobile,
  R3Mobile,
  R4Mobile,
  R5Mobile,
  R6Mobile,
  R7Mobile,
  R8Mobile,
  R9Mobile,
  R10Mobile,
  R11Mobile
];

const MHCImageListWeb = [M1, M2, M3, M4, M5, M6, M7];
const MHCImageListMobile = [
  M1Mobile,
  M2Mobile,
  M3Mobile,
  M4Mobile,
  M5Mobile,
  M6Mobile,
  M7Mobile,
  M8Mobile,
  M9Mobile,
  M10Mobile,
  M11Mobile,
  M12Mobile,
  M13Mobile,
  M14Mobile
];
const INNImageListWeb = [INN1, INN2, INN3, INN4, INN5, INN6, INN7, INN8];

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
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 720;
    if (!isMobile) {
      return (
        <div className="App" style={{ height: '100%' }}>
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
                            photos={INNImageListWeb}
                            title="IT'S NOT NUTS"
                            subtitle="business concept & branding"
                            descriptionOne="Chances are, you know somebody with a nut allergy or maybe you even suffer from the allergy yourself. I’m one of these people, so I know it can be incredibly difficult to eat at bakeries due to the abundance of products containing nuts and the fear of cross-contamination."
                            descriptionTwo=" is a concept for a 100% nut-free bakery that sells a variety of items ranging from baked treats to everyday bread necessities. Because it can be inconvenient for people to go out of their way just to buy bread and baked goods, there is a delivery system in place for easy and consistent ordering. The brand assets also include an allergy card to be filled out by those with allergies other than nuts. The bakery strives to create a safe environment for everyone to eat at.
                            The colorful but clean branding is intended to bring a playful feel to a serious matter and to be as clear as possible for the safety and peace of mind of the customers."
                            italic="It's Not Nuts"
                          />
                        )}
                      />
                      <Route
                        path="/tds"
                        key="tds"
                        render={() => (
                          <LinkGallery
                            photos={TDSImgList}
                            title="TAQUERIA DEL SOL"
                            subtitle="menu & collateral"
                            descriptionOne="Taqueria del Sol is one of the best spots in Atlanta for great tacos and margaritas. The food is so great that customers routinely wait in a long line before finally arriving at the counter."
                            descriptionTwo="To speed up the process and increase drink sales, the new menu layout provides a one-page glance at the food and beverages being sold. The menu shows both drinks and food on the same page, encouraging customers to purchase drinks while waiting in line. Also, customers are ready to order as soon as they’ve reached the counter."
                          />
                        )}
                      />
                      <Route
                        path="/clarkston"
                        key="clarkston"
                        render={() => (
                          <LinkGallery
                            photos={ClarkstonImageListWeb}
                            title="CITY OF CLARKSTON"
                            subtitle="city branding & guidelines"
                            descriptionOne="Clarkston is a small but unique town located east of Atlanta and is known for a couple things: its circular city limits and its diversity. Clarkston has become a safe haven and home to refugees and as a city, they welcome these individuals with open arms."
                            descriptionTwo="The new brand for Clarkston was a comprehensive identity project to better define who Clarkston is as well as their goals for their future. Intensive research and design execution resulted in providing a clear brand identity and set of assets that proudly reflect the community."
                          />
                        )}
                      />
                      <Route
                        path="/recovered"
                        key="recovered"
                        render={() => (
                          <LinkGallery
                            photos={RecoveredImageListWeb}
                            title="[RECOVERED]"
                            subtitle="event planning & branding"
                            descriptionOne=" was a graphic design exhibition showcasing the work of Georgia State University’s graduating BFA Graphic Design class of 2019. A team composed of myself and two of my classmates took on all of the tasks required to make the event possible including: location scouting, branding and design, sponsorship acquisition, internal and external communications, as well as budgeting and expensing."
                            descriptionTwo="We created a dynamic brand that extended to posters, invitations, banners, social assets, a website, merchandise, and directional signage. The show was funded through local sponsors and donations. Guests at the show included family, friends, local artists, and local design agencies. Through the success of the show, we were able to showcase the work of Georgia State’s students and set the bar high for the future of the graphic design program."
                            italic2="[RECOVERED]"
                          />
                        )}
                      />
                      <Route
                        path="/mhc"
                        key="mhc"
                        render={() => (
                          <LinkGallery
                            photos={MHCImageListWeb}
                            title="MENTAL HEALTH CHAMPIONS"
                            subtitle="social asset creation"
                            descriptionOne="Mental Health Champions is a campaign fighting mental health stigma. Mental health conditions are experienced by millions of people around the world, and although these conditions are not uncommon, they are often stigmatized when people don’t know much about them."
                            descriptionTwo="To become a mental health champion, you can sign up to receive weekly texts or emails containing downloadable illustrations filled with informational messages on mental health and the stigma associated. These images are intended to be shared on social media. Visit actionminded.org to sign up and view more artwork from myself and other artists."
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
                      <Route
                        exact={true}
                        path="/workForMobile"
                        component={WorkMobile}
                      />
                      <Route
                        style={{ height: '100%' }}
                        exact={true}
                        path="/work"
                        component={WorkForMobile}
                      />

                      <Route
                        path="/itsnotnuts"
                        render={() => (
                          <LinkGalleryMobile
                            photos={INNImageListWeb}
                            title="IT'S NOT NUTS"
                            subtitle="business concept & branding"
                            descriptionOne="Chances are, you know somebody with a nut allergy or maybe you even suffer from the allergy yourself. I’m one of these people, so I know it can be incredibly difficult to eat at bakeries due to the abundance of products containing nuts and the fear of cross-contamination."
                            descriptionTwo=" is a concept for a 100% nut-free bakery that sells a variety of items ranging from baked treats to everyday bread necessities. Because it can be inconvenient for people to go out of their way just to buy bread and baked goods, there is a delivery system in place for easy and consistent ordering. The brand assets also include an allergy card to be filled out by those with allergies other than nuts. The bakery strives to create a safe environment for everyone to eat at.
                            The colorful but clean branding is intended to bring a playful feel to a serious matter and to be as clear as possible for the safety and peace of mind of the customers."
                            italic="It's Not Nuts "
                          />
                        )}
                      />
                      <Route
                        path="/tds"
                        render={() => (
                          <LinkGalleryMobile
                            photos={TDSImgList}
                            title="TAQUERIA DEL SOL"
                            subtitle="menu & collateral"
                            descriptionOne="Taqueria del Sol is one of the best spots in Atlanta for great tacos and margaritas. The food is so great that customers routinely wait in a long line before finally arriving at the counter."
                            descriptionTwo="To speed up the process and increase drink sales, the new menu layout provides a one-page glance at the food and beverages being sold. The menu shows both drinks and food on the same page, encouraging customers to purchase drinks while waiting in line. Also, customers are ready to order as soon as they’ve reached the counter."
                          />
                        )}
                      />
                      <Route
                        path="/clarkston"
                        render={() => (
                          <LinkGalleryMobile
                            photos={ClarkstonImageListMobile}
                            title="CITY OF CLARKSTON"
                            subtitle="city branding & guidelines"
                            descriptionOne="Clarkston is a small but unique town located east of Atlanta and is known for a couple things: its circular city limits and its diversity. Clarkston has become a safe haven and home to refugees and as a city, they welcome these individuals with open arms."
                            descriptionTwo="The new brand for Clarkston was a comprehensive identity project to better define who Clarkston is as well as their goals for their future. Intensive research and design execution resulted in providing a clear brand identity and set of assets that proudly reflect the community."
                          />
                        )}
                      />
                      <Route
                        path="/recovered"
                        render={() => (
                          <LinkGalleryMobile
                            photos={RecoveredImageListMobile}
                            title="[RECOVERED]"
                            subtitle="event planning & branding"
                            descriptionOne=" was a graphic design exhibition showcasing the work of Georgia State University’s graduating BFA Graphic Design class of 2019. A team composed of myself and two of my classmates took on all of the tasks required to make the event possible including: location scouting, branding and design, sponsorship acquisition, internal and external communications, as well as budgeting and expensing."
                            descriptionTwo="We created a dynamic brand that extended to posters, invitations, banners, social assets, a website, merchandise, and directional signage. The show was funded through local sponsors and donations. Guests at the show included family, friends, local artists, and local design agencies. Through the success of the show, we were able to showcase the work of Georgia State’s students and set the bar high for the future of the graphic design program."
                            italic2="[RECOVERED]"
                          />
                        )}
                      />
                      <Route
                        path="/mhc"
                        render={() => (
                          <LinkGalleryMobile
                            photos={MHCImageListMobile}
                            title="MENTAL HEALTH CHAMPIONS"
                            subtitle="social asset creation"
                            descriptionOne="Mental Health Champions is a campaign fighting mental health stigma. Mental health conditions are experienced by millions of people around the world, and although these conditions are not uncommon, they are often stigmatized when people don’t know much about them."
                            descriptionTwo="With this campaign, you sign up to receive weekly texts or emails containing downloadable artwork filled with informational messages on mental health and the stigma associated. These images are intended to be shared on social media."
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
