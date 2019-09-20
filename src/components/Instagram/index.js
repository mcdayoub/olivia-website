import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import request from 'superagent';

const Display = styled.ul`
  background: white;
  color: black;
  .whiteBar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    z-index: 100;
    background-color: white;
  }
  .whiteBar2 {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 100;
    background-color: white;
  }
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
    flex-direction: row;
    padding-left: 0px;
    flex-wrap: wrap;
    padding-top: 0px;
    overflow-y: auto;
    justify-content: center;
  }
  .container-3::-webkit-scrollbar {
    display: none;
  }
  .photoDiv {
    padding: 5px;
  }
  img {
    height: 400px;
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
  .resize {
    height: 300px;
    width: 300px;
  }
`;
class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=404638648.1677ed0.3e668aa101f440649fb427529633e8d0'
      )
      .then(res => {
        this.setState({
          photos: res.body.data
        });
      });
  }

  render() {
    return (
      <div>
        <Display>
          <div className="whiteBar" />
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
                <Link to="/instagram">instagram--></Link>
              </div>
              <div className="linkItem">
                <Link to="/contact">contact</Link>
              </div>
            </div>
            <div className="container-3">
              {this.state.photos.map((photo, key) => {
                return (
                  <div className="photoDiv" key={photo.id}>
                    <img
                      className="resize"
                      src={photo.images.standard_resolution.url}
                      alt={photo.caption}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="whiteBar2" />
        </Display>
      </div>
    );
  }
}

export default Instagram;
