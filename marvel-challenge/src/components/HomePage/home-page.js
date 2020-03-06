import React, { useState } from 'react';
import Noty from 'noty';

import SearchBar from '../../components/SearchBar/search-bar';
import SearchOptionsToggle from '../../components/SearchOptions/search-options-toggle';
import SearchOptions from '../../components/SearchOptions/search-options';
import ResultDisplay from '../../components/ResultDisplay/result-display';
import Gallery from '../../components/Gallery/gallery';
import Popular from '../../components/Popular/popular';

import GiphyLogo from '../../assets/giphy-logo.png';
import ApiKey from '../../hidden/api-key.js';

const HomePage = () => {
  // Query URL variables that can be changed in the future if desired
  const version = 'v1';
  const searchType = 'gifs';

  // State setup
  const [data, setData] = useState(null);
  const [rating, setRating] = useState('G');
  const [pagination, setPagination] = useState(25);
  const [recentRequestSize, setRecentRequestSize] = useState(0);
  const [query, setQuery] = useState(''); // query is the string that's submitted along with the request, updates every keystroke
  const [searchTerm, setSearchTerm] = useState(''); // searchTerm is the string that's given to the result display, only updates when query submitted 
  const [showOptions, setShowOptions] = useState(false);
  const [galleryLinks, setGalleryLinks] = useState(null);

  // Handles the user doing any sort of submissiona action (pressing enter, clicking search, etc.)
  async function handleSubmit(_query, _paginationSize) {
    let url;
    if (_paginationSize) {
      url = `//api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=${_paginationSize}&offset=0&rating=${rating}&lang=en`;
      setRecentRequestSize(_paginationSize);
    }
    else {
      url = `//api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=${pagination}&offset=0&rating=${rating}&lang=en`;
      setRecentRequestSize(pagination);
    }
    let dataResponse = await fetch(url);
    let dataAsJSON = await dataResponse.json();
    generateCards(dataAsJSON);
  }

  // Generates cards based on the data passed in 
  function generateCards(response) {
    // Check to catch any invalid requests as they roll through
    if (response.meta.status !== 200) {
      notify(`ERROR ${response.meta.status}: ${response.meta.msg}`);
      return;
    } else if (response.data.length === 0) {
      notify(`ERROR: No results found. Please change your submission text and try again.`);
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
    if (typeof activeValue === 'number')
      setPagination(activeValue);
    else
      setRating(activeValue.toLowerCase());
  }

  // Handles creating new notifications via Noty
  function notify(_text, _timeout=2500) {
    new Noty({
      text: _text,
      timeout: _timeout,
      theme: "nest"
    }).show();
  }

  function handleOpenGallery(_image, _source){
    setGalleryLinks([_image, _source]);
  }

  function handleCloseGallery(){
    setGalleryLinks(null);
  }

  return (
    <>
      {galleryLinks && <Gallery links={galleryLinks} closeGallery={handleCloseGallery}/>}
      <div className='bg-with-shapes'>
        <div id='header'>
          <h1 id='title-text'>GIFASAURUS</h1>
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
      {data && <ResultDisplay title={`Showing results for '${searchTerm}':`} response={data} loadMoreFunction={handleLoadMore} expandable={true} openGallery={handleOpenGallery} />}
      <Popular openGallery={handleOpenGallery} />
    </>
  )
}

export default HomePage;