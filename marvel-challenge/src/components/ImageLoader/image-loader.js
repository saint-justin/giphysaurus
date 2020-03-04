
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

  return (
    <a className={`image-loader  ${props.popular && 'popular-image'} ${props.onClick && 'clickable'}`} href={props.src} style={styles} onClick={props.onClick} />
  );
}

export default ImageLoader;

