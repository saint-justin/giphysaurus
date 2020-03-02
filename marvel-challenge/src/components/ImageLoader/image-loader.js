
import React, { Component } from "react";

class ImageLoader extends Component {
  // Initial state setup & state modification functions
  state = { imageStatus: "loading" };

  imageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  imageError() {
    this.setState({ imageStatus: "failed" });
  }

  render() {
    return (
      <a className='image-loader'>
        <img
          className='loaded-image'
          src={this.props.link}
          onLoad={this.imageLoaded.bind(this)}
          onError={this.imageError.bind(this)}
          alt='Animated GIF'
        />
      </a>
    );
  }
}
export default ImageLoader;

