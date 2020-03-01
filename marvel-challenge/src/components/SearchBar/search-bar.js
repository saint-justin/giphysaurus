import React, { useState } from 'react';
import searchPath from '../../assets/search-solid.svg';

// Search bar to be used at the top of the site
const SearchBar = (props) => {
  const [input, setInput] = useState('');

  return (
    <div className='search-border-wrap'>
      <input className='search-bar-input' type='text' placeholder={props.placeholder} onChange={e => setInput(e.target.value)} value={input} />
      <div className='button-wrapper'>
        <button className='search-button'>
          <img src={searchPath} alt='Search'></img>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;