import React, { useState } from 'react';
import filterPath from '../../assets/filter-solid.svg';

// Search bar to be used at the top of the site
const SearchOptions = () => {
  // const [input, setInput] = useState('');
  return (
    <div className='button-warpper'>
      <button className='filter-button'>
         <img src={filterPath} alt='Search' />
      </button>
    </div>
  )
}

export default SearchOptions;