import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MobileNavBarOlivia from '../MobileNavBarOlivia';
import Logo from './LogoBlue.png';
import Hamburger from './HamburgerBlue.png';

const DisplayMobile = styled.ul`
  background: white;
  color: black;
  html,
  body {
    margin: 0;
    height: 100%;
  }
  height: 100%;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  form {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-weight: normal;
    text-decoration: underline;
  }
  .note {
    padding-bottom: 10px;
  }

  input {
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: transparent;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    font-size: 14px;
    font-family: 'Courier New';
  }
  textarea {
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: transparent;
    height: 100px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    resize: none;
    font-size: 14px;
    font-family: 'Courier New';
  }
  button {
    background-color: #425bea;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Courier New';
  }
  .buttonDiv {
    padding-top: 20px;
  }
  .container {
    padding-top: 75px;
    justify-content: center;
    width: 100%;
  }
  textarea,
  input[type='text'],
  input[type='button'],
  input[type='email'] {
    -webkit-appearance: none;
    border-radius: 0;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

class ContactFormMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      buttonText: 'send it!',
      title: 'leave me a note'
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-mobile', ...this.state })
    })
      .then(
        this.setState({
          buttonText: 'sent!',
          title: 'thanks for your message!'
        })
      )
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div classname="hey" style={{ height: '100%' }}>
        <MobileNavBarOlivia
          Logo={Logo}
          work={notbold}
          instagram={notbold}
          about={notbold}
          contact={bold}
          color={'#425bea'}
          Hamburger={Hamburger}
        />
        <div style={{ height: 'calc(100% - 75px)' }}>
          <DisplayMobile>
            <div className="container">
              <form
                onSubmit={this.handleSubmit}
                name="contact-mobile"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="note">
                  <h3>{this.state.title}</h3>
                </div>
                <input type="hidden" name="form-name" value="contact-mobile" />
                <p>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="your name"
                    required
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="your email"
                    required
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    placeholder="your message to me"
                    required
                  />
                </p>
                <div className="buttonDiv">
                  <button type="submit">{this.state.buttonText}</button>
                </div>
              </form>
            </div>
          </DisplayMobile>
        </div>
      </div>
    );
  }
}

export default ContactFormMobile;
