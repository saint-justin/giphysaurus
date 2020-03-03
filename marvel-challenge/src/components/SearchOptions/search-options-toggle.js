import React, { useState } from 'react';
import filterPath from '../../assets/filter-solid.svg';


// Search bar to be used at the top of the site
const SearchOptions = (props) => {
  return (
    <div className='filter-wrapper'>
      <button className='filter-button' onClick={props.onClick}>
         <img src={filterPath} alt='Search' />
      </button>
    </div>
  )
}

export default SearchOptions;