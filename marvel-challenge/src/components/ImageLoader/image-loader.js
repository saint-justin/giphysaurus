
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
    <div className={`image-loader  ${props.popular ? 'popular-image' : 'standard-image'} clickable`} 
      style={styles} 
      onClick={props.onClick ? props.onClick : () => props.openGallery(props.link, props.src)} 
    />
  );
}

export default ImageLoader;

