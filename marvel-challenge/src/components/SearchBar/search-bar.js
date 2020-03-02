import React, { useState } from 'react';
import searchPath from '../../assets/search-solid.svg';

// Search bar to be used at the top of the site
const SearchBar = (props) => {
  const [input, setInput] = useState('');

  return (
    <div className='search-border-wrap'>
      <input 
        className='search-bar-input' 
        type='text' 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        value={props.value} 
        onKeyPress={props.keyDown}
      />
      <div className='button-wrapper'>
        <button className='search-button' onClick={props.buttonAction}>
          <h2>Search</h2> <img src={searchPath} alt='Search'></img>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;