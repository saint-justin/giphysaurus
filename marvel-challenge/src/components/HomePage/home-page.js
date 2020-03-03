import React, { useState } from 'react';

import SearchBar from '../../components/SearchBar/search-bar';
import SearchOptionsToggle from '../../components/SearchOptions/search-options-toggle';
import SearchOptions from '../../components/SearchOptions/search-options';
import ResultDisplay from '../../components/ResultDisplay/result-display';
import GiphyLogo from '../../assets/giphy-logo.png';

import ApiKey from '../../hidden/api-key.js';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [version, setVersion] = useState('v1');
  const [searchType, setSearchType] = useState('gifs');
  const [rating, setRating] = useState('G');
  const [query, setQuery] = useState(''); // query is the string that's submitted along with the request, updates every keystroke
  const [searchTerm, setSearchTerm] = useState(''); // searchTerm is the string that's given to the result display, only updates when query submitted 
  const [showOptions, setShowOptions] = useState(false);

  // Functions handling query submission and reception ---
  async function handleSubmit(_query) {
    console.log(ApiKey);
    const URL = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=25&offset=0&rating=${rating}&lang=en`;
    let dataResponse = await fetch(URL);
    let dataAsJSON = await dataResponse.json();
    generateCards(dataAsJSON);
  }

  function generateCards(response) {
    // Check to catch any incorrect requests as they roll through
    if (response.meta.status !== 200) {
      console.log(`ERROR ${response.meta.status}: ${response.meta.msg}`);
      return; // TODO: Add in Noty for notifications
    } 
    setData(response);
    setSearchTerm(query);
  }

  function handleTextInput(e) {
    setQuery(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter')
      handleSubmit(query);
  }

  // Functions to handle filters
  function handleShowOptions(){
    setShowOptions(!showOptions);
  }

  return (
    <>
      <div className='bg-with-shapes'>
        <div id='header'>
          <h1 id='title-text'>SEARCH-A-ROO</h1>
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
          <SearchOptionsToggle id='search-options' onClick={handleShowOptions}/>
        </section>
        {showOptions && <SearchOptions />}
      </div>
      {data && <ResultDisplay title={`Showing results for '${searchTerm}':`} response={data} />}
    </>
  )
}

export default HomePage;