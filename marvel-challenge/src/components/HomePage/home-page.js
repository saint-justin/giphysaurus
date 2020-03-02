import React, { useState } from 'react';

import SearchBar from '../../components/SearchBar/search-bar';
import SearchOptions from '../../components/SearchOptions/search-options';
import ResultDisplay from '../../components/ResultDisplay/result-display';
import GiphyLogo from '../../assets/giphy-logo.png';

import ApiKey from '../../hidden/api-key';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [version, setVersion] = useState('v1');
  const [searchType, setSearchType] = useState('gifs');
  const [rating, setRating] = useState('G');
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Functions handling query submission and reception ---
  async function handleSubmit(_query){
    const URL = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${_query}&limit=25&offset=0&rating=${rating}&lang=en`;
    let dataResponse = await fetch(URL);
    let dataAsJSON = await dataResponse.json();
    generateCards(dataAsJSON);
  }

  function generateCards(response) {
    // Catch any incorrect requests as they roll through
    if (response.meta.status !== 200) {
      console.log(`ERROR ${response.meta.status}: ${response.meta.msg}`);
      return;
    } else {
      console.log('SUCCESS')
    }

    setData(response);
    setSearchTerm(query);
  }

  // Functions to handle filters


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
            value = {query}
            onChange = {(e) => setQuery(e.target.value)}
            buttonAction = {() => handleSubmit(query)}
          />
          <SearchOptions id='search-options' />
        </section>
      </div>
      {data && <ResultDisplay query={searchTerm} response={data}/>}
    </>
  )
}

export default HomePage;