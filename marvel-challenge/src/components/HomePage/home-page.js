import React, { useState } from 'react';
import Noty from 'noty';

import SearchBar from '../../components/SearchBar/search-bar';
import SearchOptionsToggle from '../../components/SearchOptions/search-options-toggle';
import SearchOptions from '../../components/SearchOptions/search-options';
import ResultDisplay from '../../components/ResultDisplay/result-display';
import Footer from '../../components/Footer/footer'

import GiphyLogo from '../../assets/giphy-logo.png';
import ApiKey from '../../hidden/api-key.js';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [version, setVersion] = useState('v1');
  const [searchType, setSearchType] = useState('gifs');
  const [rating, setRating] = useState('G');
  const [pagination, setPagination] = useState(25);
  const [recentRequestSize, setRecentRequestSize] = useState(0);
  const [query, setQuery] = useState(''); // query is the string that's submitted along with the request, updates every keystroke
  const [searchTerm, setSearchTerm] = useState(''); // searchTerm is the string that's given to the result display, only updates when query submitted 
  const [showOptions, setShowOptions] = useState(false);

  // Functions handling query submission and reception ---
  async function handleSubmit(_query, _paginationSize) {
    console.log(ApiKey);
    let url;
    if (_paginationSize) {
      url = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=${_paginationSize}&offset=0&rating=${rating}&lang=en`;
      setRecentRequestSize(_paginationSize);
    }
    else {
      url = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=${pagination}&offset=0&rating=${rating}&lang=en`;
      setRecentRequestSize(pagination);
    }
    let dataResponse = await fetch(url);
    let dataAsJSON = await dataResponse.json();
    generateCards(dataAsJSON);
  }


  function generateCards(response) {
    // Check to catch any invalid requests as they roll through
    if (response.meta.status !== 200) {
      notify(`ERROR ${response.meta.status}: ${response.meta.msg}`);
      return;
    } else if (response.data.length === 0) {
      notify(`ERROR: Please include something in the search body.`);
      return;
    }

    // If the data is fine, set the response and query term into the display
    setData(response);
    setSearchTerm(query);
  }

  // Updates the query state based on the text input in the input box
  function handleTextInput(e) {
    setQuery(e.target.value);
  }

  // Checks every keystroke if enter has been pressed to fire off the API request
  function handleKeyDown(e) {
    if (e.key === 'Enter')
      handleSubmit(query);
  }

  // Functions to handle filters
  function handleShowOptions() {
    setShowOptions(!showOptions);
  }

  function handleLoadMore() {
    handleSubmit(query, recentRequestSize + 25);
  }

  // Updates pagination limit based on which button is actively selected
  function handleOptionsChange(activeValue) {
    console.log(activeValue);

    if (typeof activeValue === 'number')
      setPagination(activeValue);
    else
      setRating(activeValue.toLowerCase());
  }

  // Handles creating new notifications via Noty
  function notify(_text) {
    new Noty({
      text: _text,
      timeout: 2500,
      theme: "nest"
    }).show();
  }

  return (
    <>
      <div className='bg-with-shapes'>
        <div id='header'>
          <h1 id='title-text'>GIFAROO</h1>
          <div id='giphy-section'>
            <h2>POWERED BY</h2>
            <img src={GiphyLogo} alt='GIPHY'></img>
          </div>
        </div>
        <section className='search-row'>
          <SearchBar
            id='search-bar'
            placeholder='Search for a gif...'
            value={query}
            onChange={(e) => handleTextInput(e)}
            buttonAction={() => handleSubmit(query)}
            keyDown={(e) => handleKeyDown(e)}
          />
          <SearchOptionsToggle id='search-options' onClick={handleShowOptions} />
        </section>
        <div className="menu-options">
          {showOptions && <SearchOptions title='Images Per Search:' activeButtonChanged={handleOptionsChange} valueSet={[25, 50, 75, 100]} />}
          {showOptions && <SearchOptions title='Max Image Rating:' activeButtonChanged={handleOptionsChange} valueSet={['G', 'PG', 'PG-13', 'UNRATED']} />}
        </div>
      </div>
      {data && <ResultDisplay title={`Showing results for '${searchTerm}':`} response={data} loadMoreFunction={handleLoadMore} expandable={true} />}
    </>
  )
}

export default HomePage;