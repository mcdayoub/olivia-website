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

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

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
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          {/* <ThemeSwitcher toggleTheme={this.toggleTheme} /> */}
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <div>
                  <Route exact={true} path="/" component={Home} />
                  <Route exact={true} path="/about" component={About} />
                  <Route exact={true} path="/work" component={Work} />
                  <Route exact={true} path="/instagram" component={Instagram} />
                  <Route exact={true} path="/contact" component={Contact} />
                </div>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
