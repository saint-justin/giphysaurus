import React, { useState } from 'react';
import ApiKey from '../../hidden/api-key.js'

const Search = () => {

  const [data, setData] = useState({});
  const [version, setVersion] = useState('v1');
  const [searchType, setSearchType] = useState('gifs');
  const [query, setQuery] = useState('beans');

  async function handleSubmit(e) {
    e.preventDefault();
    const URL = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

    // Get the user's summoner info
    let dataResponse = await fetch(URL);
    let dataAsJSON = await dataResponse.json();
    console.log(dataAsJSON);
    setData(dataAsJSON);
  }

  return (
    <>
      <button onClick={(e) => { handleSubmit(e) }}>
        Click to Search
      </button>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default Search;