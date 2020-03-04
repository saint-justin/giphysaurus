import React, { useState, useEffect, useCallback } from 'react';
import IconLink from '../../assets/link-solid.svg';

// This is an overlay over the entire website that pops up when a given gif is clicked on to show the entire gif at full size
const Gallery = (props) => {

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      props.closeGallery();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className='gallery-bg' onClick={props.closeGallery}>
      <div className='gallery-image-wrapper'>
        <img src={props.links[0]} alt='Gallery Image' className='gallery-image'></img>
        <div className='gallery-links'>
          <a className='gallery-btn' href={props.links[1]}><h2>GIPHY LINK</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Gallery;