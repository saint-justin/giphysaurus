import React from 'react';
import ImageLoader from './image-loader';

// This componenet is essentially a child of ImageLoader but allowing the used to let the user load more iamges
const LoadMore = (props) => {
  return(
    <ImageLoader link={props.link} onClick={props.onClick} />
  )
}

export default LoadMore;