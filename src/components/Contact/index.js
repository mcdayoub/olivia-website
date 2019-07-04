import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBarOlivia from '../NavBarOlivia';
import Logo from './LogoBlue.png';
import './index.css';
import posed from 'react-pose';
const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.05
  }
});

const Display = styled.ul`
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
  }
  .note {
    padding-bottom: 30px;
  }

  input {
    width: 700px;
    padding: 12px 12px;
    background-color: transparent;
    border-bottom: 10px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    font-size: 14px;
    font-family: 'Courier New';
    border-radius: 0;
  }
  #name {
    border-top: 1px solid black;
  }
  textarea {
    width: 700px;
    padding: 12px 20px;
    margin: 0px 0px;
    background-color: transparent;
    height: 200px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    resize: none;
    font-size: 14px;
    font-family: 'Courier New';
    border-radius: 0;
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
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    padding-top: 75px;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const bold = { 'font-weight': 'bold' };

class ContactForm extends React.Component {
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
      body: encode({ 'form-name': 'contact', ...this.state })
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
        <NavBarOlivia Logo={Logo} contact={bold} color={'#425bea'} />
        <div style={{ height: 'calc(100% - 75px)' }}>
          <Display>
            <div className="container">
              <form
                onSubmit={this.handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="note">
                  <h3>{this.state.title}</h3>
                </div>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="your name"
                    required
                    id="name"
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
                    id="email"
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
                  <Box>
                    <button type="submit">{this.state.buttonText}</button>
                  </Box>
                </div>
              </form>
            </div>
          </Display>
        </div>
      </div>
    );
  }
}

export default ContactForm;
