import React, { useState } from 'react';
import IconLink from '../../assets/link-solid.svg';

// This is an overlay over the entire website that pops up when a given gif is clicked on to show the entire gif at full size
const Gallery = (props) => {
  const [image, setImage] = useState('');

  return (
    <div className='gallery-bg'>
      <div className='gallery-image-wrapper'>
        <img src={props.link} alt='Gallery Image' className='gallery-image'></img>
        <div className='gallery-links'>
          <button className='gallery-btn'><h2>GIPHY LINK</h2><img className='gallery-icon' src={IconLink} alt='Link to hosting site' /></button>
        </div>
      </div>
    </div>
  )
}

export default Gallery;