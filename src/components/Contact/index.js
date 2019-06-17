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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

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
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

// class Contact extends Component {
//   state = {
//     name: '',
//     message: '',
//     email: '',
//     sent: false,
//     buttonText: 'Send Message'
//   };
//   handleSubmit = e => {
//     this.setState({
//       buttonText: '...sending'
//     });
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({ 'form-name': 'contact', ...this.state })
//     })
//       .then(() => alert('Success!'))
//       .catch(error => alert(error));

//     e.preventDefault();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       message: '',
//       email: '',
//       buttonText: 'Message Sent'
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Display>
//           <div className="container">
//             <div className="container-2">
//               <Link to="/">
//                 <img
//                   className="logo"
//                   src={require('../../weblogoolivia-01.png')}
//                   alt="hello"
//                 />
//               </Link>
//               <div className="linkItem">
//                 <Link to="/work">work</Link>
//               </div>
//               <div className="linkItem">
//                 <Link to="/about">about</Link>
//               </div>
//               <div className="linkItem">
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://www.instagram.com/rgbqueen/"
//                 >
//                   instagram
//                 </a>
//               </div>
//               <div className="linkItem">
//                 <Link to="/contact">contact--></Link>
//               </div>
//             </div>
//             <form
//               id="emailform"
//               className="contact-form"
//               method="POST"
//               data-netlify="true"
//               netlify="true"
//               name="contact"
//               onSubmit={e => this.handleSubmit(e)}
//             >
//               <input type="hidden" name="form-name" value="contact" />

//               <label class="message" htmlFor="message-input">
//                 Your Message
//               </label>
//               <textarea
//                 onChange={e => this.setState({ message: e.target.value })}
//                 name="message"
//                 class="message-input"
//                 type="text"
//                 placeholder="Please write your message here"
//                 value={this.state.message}
//                 required
//               />

//               <label class="message-name" htmlFor="message-name">
//                 Your Name
//               </label>
//               <input
//                 onChange={e => this.setState({ name: e.target.value })}
//                 name="name"
//                 class="message-name"
//                 type="text"
//                 placeholder="Your Name"
//                 value={this.state.name}
//               />

//               <label class="message-email" htmlFor="message-email">
//                 Your Email
//               </label>
//               <input
//                 onChange={e => this.setState({ email: e.target.value })}
//                 name="email"
//                 class="message-email"
//                 type="email"
//                 placeholder="your@email.com"
//                 required
//                 value={this.state.email}
//               />

//               <div className="button--container">
//                 <button type="submit" className="button button-primary">
//                   {this.state.buttonText}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </Display>
//       </div>
//     );
//   }
// }

export default ContactForm;
