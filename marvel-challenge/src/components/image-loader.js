
import React, { Component } from "react";

class ImageLoader extends Component {
  // Initial state setup & state modification functions
  state = { imageStatus: "loading" };

  imageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  imageError() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    return (
      <div>
        <img
          src={this.props.link}
          onLoad={this.imageLoaded.bind(this)}
          onError={this.imageError.bind(this)}
          alt='Animated GIF'
        />
      </div>
    );
  }
}
export default ImageLoader;

