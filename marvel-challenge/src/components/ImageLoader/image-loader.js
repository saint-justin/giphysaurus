
import React from "react";

// This component loads the individual images to the ResultDisplay components
const ImageLoader = (props) => {
  // Extra stylings to include the link in css
  const styles = {
    backgroundImage: `url('${props.link}')`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  }

  return (
    <a className='image-loader' href={props.src} style={styles} onClick={props.onClick}/>
  );
}

export default ImageLoader;

