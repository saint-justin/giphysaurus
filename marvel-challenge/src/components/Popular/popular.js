import React, { useState, useEffect } from 'react';
import ResultDisplay from '../ResultDisplay/result-display';
import ApiKey from '../../hidden/api-key';

// Displays a set of slivers as previews for the currently trending posts
const Popular = (props) => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // On the first possible load, call the data needed
  useEffect(() => {
    if(!loaded){
      async function requestPopular() {
        const URL = `http://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}`;
        let dataResponse = await fetch(URL);
        let dataAsJSON = await dataResponse.json();
        setData(dataAsJSON);
      };
  
      requestPopular();
      setLoaded(true);
    }
  });

  return (
    <>
      {!data && <>Loading popular posts...</>}
      {data && <ResultDisplay response={data} title='Trending Posts:' popular={true} openGallery={props.openGallery} />}
    </>
  )
}

export default Popular;