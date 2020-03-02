// Main imports
import React from 'react';
import HomePage from './components/HomePage/home-page.js';
import Popular from './components/Popular/popular.js'

// Styling & icon imports
import './app.scss';

function app() {
  return (
    <div id='app'>
      <HomePage />
      <Popular />
    </div>
  );
}

export default app;
