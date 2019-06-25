import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './weblogoolivia-01.png';
import './App.css';
import Home from './components/Home';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from 'styled-components';
import About from './components/About';
import Work from './components/Work';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import LinkGallery from './components/WorkLink';
import Nuts1 from './components/Work/Nuts/Nuts1.png';
import Nuts2 from './components/Work/Nuts/Nuts2.png';
import Nuts3 from './components/Work/Nuts/Nuts3.png';

//MOBILE IMPORTS
import HomeMobile from './components/HomeMobile';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

const imgList = [Nuts1, Nuts2, Nuts3];

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
    const isMobile = width <= 500;
    if (!isMobile) {
      return (
        <div className="App" style={{ height: '100%' }}>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route exact={true} path="/instagram" component={Instagram} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route
            path="/itsnotnutstests"
            render={() => (
              <LinkGallery
                photos={imgList}
                title="fuck"
                subtitle="you"
                descriptionOne="hello"
                descriptionTwo="there"
              />
            )}
          />
        </div>
      );
    } else {
      return (
        <div className="App" style={{ height: '100%' }}>
          <Route exact={true} path="/" component={HomeMobile} />
        </div>
      );
    }
  }
}

export default App;
