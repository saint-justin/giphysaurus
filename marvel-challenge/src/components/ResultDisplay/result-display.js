import React, { useState, useEffect } from 'react';
import ImageLoader from '../ImageLoader/image-loader';
import LoadMore from '../ImageLoader/load-more-button';

const ResultDisplay = (props) => {
  // Results is the JSON object that we got baclk
  const [response, setResponse] = useState(props.results);
  const deerLink = 'https://media.giphy.com/media/hrv667Kot3KPlNxrNl/giphy.gif';

  let generateCardsFromResults = (_response) => {
    if(_response === null)
      return <></>;

    console.log(_response);
    let count = _response.data.length;
    let arr = [];
    for (let i = 0; i < count; i++) 
      arr.push(<ImageLoader link={_response.data[i].images.original.url} key={i} src={_response.data[i].url}></ImageLoader>);
    
    if(props.expandable)
      arr.push(<LoadMore link={deerLink} onClick={props.loadMoreFunction} />)
    return <>{arr}</>;
  };


  return (
    <div className='results-wrapper'>
      {props.title && <h2>{props.title}</h2>}
      <div className='gradient-wrapper'>
        <div className='solid-wrapper'>
          {generateCardsFromResults(props.response)}
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay;