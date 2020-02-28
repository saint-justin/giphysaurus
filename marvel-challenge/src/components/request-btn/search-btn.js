import React, { useState } from 'react';
import ApiKey from '../../hidden/api_key'

const Search = () => {

  const [data, setData] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const reqData = {
      version: 'v1',
      searchType: 'gif'
    }
    let version = 'v1';
    let serachType
    const URL = `https://api.giphy.com/${version}/gifs/search?api_key=${ApiKey}&q=beans&limit=25&offset=0&rating=G&lang=en`;

    // Get the user's summoner info
    let dataResponse = await fetch(URL);
    let dataAsJSON = await dataResponse.json();
    setData(dataAsJSON);
  }

  return (
    <>
      <button onClick={() => { handleSubmit() }}>
        Click to Search
      </button>
      <h1>{data}</h1>
    </>
  )
}

export default Search;