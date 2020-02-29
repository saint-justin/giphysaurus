import React, { useState } from 'react';
import ApiKey from '../hidden/api-key.js'; //TODO: Make an API passthrough to protect API key better
import ImageLoader from './image-loader';

const Search = () => {

  const [cards, setCards] = useState(<></>);
  const [version, setVersion] = useState('v1');
  const [searchType, setSearchType] = useState('gifs');
  const [query, setQuery] = useState('beans');

  async function handleSubmit() {
    // Build the request URL
    const URL = `https://api.giphy.com/${version}/${searchType}/search?api_key=${ApiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

    // Request the information and store it off as JSON
    let dataResponse = await fetch(URL);
    let dataAsJSON = await dataResponse.json();
    generateCards(dataAsJSON);
  }

  function generateCards(response) {
    // Catch any incorrect requests as they roll through
    if (response.meta.status !== 200) {
      console.log(`ERROR ${response.meta.status}: ${response.meta.msg}`);
      return
    }

    // Operate as usual if status 200
    let keys = Object.keys(response.data);
    let newCards = keys.map((i) => { return <ImageLoader link={response.data[i].images.original.url} type={response.data[i].type} key={response.data[i].id}></ImageLoader>});
    setCards(<div>{newCards}</div>);
  }

  return (
    <>
      <button onClick={(e) => { handleSubmit(e) }}>
        Click to Search
      </button>
      {/* <ImageLoader link='https://media2.giphy.com/media/VUtbvV8boLo64/giphy.gif?cid=bdf9e1d5734cf4e22a81a36afe9ac78e01419d2b085ed634&rid=giphy.gif' type='gif' id='000000000'></ImageLoader> */}
      {cards}
    </>
  )
}

export default Search;