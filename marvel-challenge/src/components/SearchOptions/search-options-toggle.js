import React, { useState } from 'react';
import filterPath from '../../assets/filter-solid.svg';

import Noty from 'noty';

// Search bar to be used at the top of the site
const SearchOptions = () => {
  // const [input, setInput] = useState('');

  function notify(){
    new Noty({  
      text: "Bepis",
      // layout: "bottom",
      theme: "nest"
    }).show();
    

    console.log('ech')
  }

  return (
    <div className='filter-wrapper'>
      <button className='filter-button' onClick={() => notify()}>
         <img src={filterPath} alt='Search' />
      </button>
    </div>
  )
}

export default SearchOptions;