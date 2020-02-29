// Main imports
import React from 'react';
import Search from './components/search-btn';
import SearchBar from './components/SearchBar/search-bar';

import GiphyLogo from './assets/giphy-logo.png';

// Styling
import './app.scss';

function app() {
  return (
    <div id='app'>
      <div className='bg-with-shapes'>
        <div id='header'>
          <h1 id='title-text'>SEARCH-A-ROO</h1>
          <div id='giphy-section'>
            <h2>POWERED BY</h2>
            <img src={GiphyLogo} alt='GIPHY'></img>
          </div>
        </div>
        {/* <Search /> */}
      </div>
      {SearchBar}
    </div>
  );
}

export default app;
