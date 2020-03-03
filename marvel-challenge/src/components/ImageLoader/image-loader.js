
import React, { Component } from "react";

const ImageLoader = (props) => {
  const styles = {
    backgroundImage: `url('${props.link}')`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  }

  return (
    <a className='image-loader' href={props.src} style={styles} />
  );
}
export default ImageLoader;

