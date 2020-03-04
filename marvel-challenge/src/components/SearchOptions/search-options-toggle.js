import React, { useState } from 'react';
import filterPath from '../../assets/filter-solid.svg';

// This is the button that toggles the visibility of the search options
const SearchOptions = (props) => {
  return (
    <div className='filter-wrapper'>
      <button className='filter-button clickable' onClick={props.onClick}>
         <img src={filterPath} alt='Search' />
      </button>
    </div>
  )
}

export default SearchOptions;