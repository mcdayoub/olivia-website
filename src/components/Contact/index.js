import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoBlue.png';

const Display = styled.ul`
  background: #f4f4f4;
  color: black;
  html {
    height: 100%;
  }

  .container {
    display: flex;
    height: 100%;
  }
  .fullscreen {
    height: 100%;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  form {
    text-align: center;
    top: 50%;
    left: 50%;
    padding-top: 100px;
  }
  h3 {
    font-weight: normal;
  }
  .note {
    padding-bottom: 10px;
  }

  input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: transparent;
    border-bottom: 10px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    font-size: 14px;
    font-family: 'Courier New';
  }
  textarea {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: transparent;
    height: 200px;
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
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const bold = { 'padding-right': '60px', 'font-weight': 'bold' };
const notbold = { 'padding-right': '60px' };

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    }).catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div style={{ height: '100%', margin: '0' }}>
        <NavBarOlivia
          Logo={Logo}
          work={notbold}
          instagram={notbold}
          about={notbold}
          contact={bold}
          color={'#425bea'}
        />
        <Display>
          <form
            onSubmit={this.handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="note">
              <h3>leave me a note</h3>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="your name"
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="your email"
              />
            </p>
            <p>
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="your message to me"
              />
            </p>
            <p>
              <button type="submit">send it!</button>
            </p>
          </form>
        </Display>
      </div>
    );
  }
}

export default ContactForm;
