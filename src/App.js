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

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

const imgList = [Nuts1, Nuts2, Nuts3];

class App extends Component {
  state = {
    theme: themes.light
  };

  componentWillMount() {
    let random = Math.floor(Math.random() * Math.floor(2));
    let themeArray = [themes.light, themes.dark];
    // this.setState({ theme: themeArray[random] });
    let date = new Date();
    let currentHour = date.getHours();
    console.log(currentHour);
    if (currentHour >= 20 || currentHour <= 8) {
      //this.setState({ theme: themes.dark });
      console.log('hey');
    }
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light
    });
  };

  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        {/* <ThemeSwitcher toggleTheme={this.toggleTheme} /> */}
        <div style={{ height: '100%' }}>
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
      </div>
    );
  }
}

export default App;
