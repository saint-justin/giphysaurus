// Main imports
import React from 'react';
import HomePage from './components/HomePage/home-page';
import Footer from './components/Footer/footer';

// Styling & icon imports
import './app.scss';
import '../node_modules/noty/lib/noty.css';
import '../node_modules/noty/lib/themes/mint.css';  

function app() {
  return (
    <div id='app'>
      <HomePage />
      <Footer />
    </div>
  );
}

export default app;
