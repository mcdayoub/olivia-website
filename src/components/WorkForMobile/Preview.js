// import React, { Component } from 'react';
// class Gallery extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       array: ['one', 'two', 'three']
//     };
//   }

//   render() {
//     let images = this.state.imgListTwo.map(image => {
//       return (
//         <img
//           key={image}
//           src={require('' + image)}
//           alt=""
//           className="img-responsive"
//         />
//       );
//     });

//     return <div>{images}</div>;
//   }
// }
// export default Gallery;

import React, { Component } from 'react';
class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ['one', 'two', 'three'],
      imgListTwo: this.props.previewList
    };
    console.log(this.state.imgListTwo);
  }

  render() {
    let images = this.props.previewList.map(image => {
      return (
        <img
          key={image}
          src={require('' + image)}
          alt=""
          className="img-responsive"
        />
      );
    });

    return <div>{images}</div>;
  }
}
export default Preview;

//   render() {
//     return (
//       <div>
//         <img
//           key={this.props.imgList}
//           src={require('' + this.props.imgList)}
//           alt=""
//           className="img-responsive"
//         />
//       </div>
//     );
//   }
// }
// export default Gallery;
