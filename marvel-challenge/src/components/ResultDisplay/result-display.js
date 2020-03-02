import React, { useState, useEffect } from 'react';
import ImageLoader from '../ImageLoader/image-loader';

const ResultDisplay = (props) => {
  // Results is the JSON object that we got baclk
  const [response, setResponse] = useState(props.results);
  const deerLink = 'https://media3.giphy.com/media/Qld1cd6a6QlWw/giphy.gif?cid=bdf9e1d52749d9dbc0b57e4a6aadd2a110628b9b1595d088&rid=giphy.gif';

  let generateCardsFromResults = (_response) => {
    console.log(_response);
    let count = _response.data.length;
    let arr = [];
    for (let i = 0; i < count; i++) 
      arr.push(<ImageLoader link={_response.data[i].images.original.url} key={i}></ImageLoader>);
    return <>{arr}</>;
  };


  return (
    <div className='results-wrapper'>
      <h2>Search results for "{props.query}": </h2>
      <div className='gradient-wrapper'>
        <div className='solid-wrapper'>
          {generateCardsFromResults(props.response)}
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay;