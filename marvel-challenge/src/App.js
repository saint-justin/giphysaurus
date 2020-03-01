// Main imports
import React from 'react';
import Search from './components/search-btn';
import SearchBar from './components/SearchBar/search-bar.js';
import SearchOptions from './components/SearchOptions/search-options.js';

// Image imports
import GiphyLogo from './assets/giphy-logo.png';

// Styling & icon imports
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
        <section className='search-row'>
          <SearchBar id='search-bar' placeholder='Search for a gif...'/>
          <SearchOptions id='search-options' />
        </section>
      </div>
    </div>
  );
}

export default app;
