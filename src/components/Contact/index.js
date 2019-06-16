import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const Display = styled.ul`
  background: white;
  color: black;
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
    flex-direction: column;
    text-align: left;
    margin-left: auto;
    margin-right: 40px;
    justify-content: center;
  }
  .container-4 {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: auto;
    justify-content: center;
    flex-basis: 20%;
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
`;

const Paragraph = styled.ul`
  font-size: 18px;
`;

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  };
  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending'
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post('API_URI', data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log('Message not sent');
      });
  };
  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    });
  };

  render() {
    return (
      <div>
        <Display>
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
                <Link to="/work">work</Link>
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
                <Link to="/contact">contact--></Link>
              </div>
            </div>
            <form
              className="contact-form"
              action="POST"
              data-netlify="true"
              onSubmit={e => this.formSubmit(e)}
            >
              <label class="message" htmlFor="message-input">
                Your Message
              </label>
              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                name="message"
                class="message-input"
                type="text"
                placeholder="Please write your message here"
                value={this.state.message}
                required
              />

              <label class="message-name" htmlFor="message-name">
                Your Name
              </label>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                class="message-name"
                type="text"
                placeholder="Your Name"
                value={this.state.name}
              />

              <label class="message-email" htmlFor="message-email">
                Your Email
              </label>
              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                class="message-email"
                type="email"
                placeholder="your@email.com"
                required
                value={this.state.email}
              />

              <div className="button--container">
                <button type="submit" className="button button-primary">
                  {this.state.buttonText}
                </button>
              </div>
            </form>
          </div>
        </Display>
      </div>
    );
  }
}

export default Contact;
