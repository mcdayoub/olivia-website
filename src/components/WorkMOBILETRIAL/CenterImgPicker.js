import React from 'react';
import Image1 from './Nuts/Nuts1.png';
import Image2 from './Nuts/Nuts2.png';
import Image3 from './Nuts/Nuts3.png';

export default function CenterImgPicker(props) {
  const images = [Image1, Image2, Image3];
  return <img src={images[props.imageNumber]} alt="hello" />;
}
