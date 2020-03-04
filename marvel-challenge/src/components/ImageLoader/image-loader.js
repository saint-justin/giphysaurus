
import React, { useState, useEffect } from "react";

// This component loads the individual images to the ResultDisplay components
const ImageLoader = (props) => {
  const [imageDimensions, setImageDimensions] = useState([-1, -1]);
  const [dimensionsAcquired, setDimensionsAcquired] = useState(false);

  // Extra stylings to include the link in css
  const styles = {
    backgroundImage: `url('${props.link}')`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  }

  // // Get the dimensions of the image so we can blow it up when hovered
  // useEffect(() => {
  //     if (!dimensionsAcquired) {
  //       let image = new Image();
  //       image.onload = () => {
  //         setDimensions(this.width, this.height);
  //       }
  //       image.src = props.link;
  //     }
  //   }
  // )

  // function setDimensions(width, height){
  //   setImageDimensions([width, height])
  // }

  return (
    <a className={`image-loader  ${props.popular && 'popular-image'}`} href={props.src} style={styles} onClick={props.onClick} />
  );
}

export default ImageLoader;

