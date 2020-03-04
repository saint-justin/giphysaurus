import React, { useState, useEffect } from 'react';
import ImageLoader from '../ImageLoader/image-loader';
import LoadMore from '../ImageLoader/load-more-button';

const ResultDisplay = (props) => {
  // Results is the JSON object that we got back
  const [response, setResponse] = useState(props.results);
  const deerLink = 'https://media.giphy.com/media/hrv667Kot3KPlNxrNl/giphy.gif';

  let generateCardsFromResults = (_response) => {
    if (_response === null)
      return <></>;

    console.log(_response);
    let count = _response.data.length;
    let arr = [];
    for (let i = 0; i < count; i++)
      arr.push(<ImageLoader popular={props.popular} link={_response.data[i].images.original.url} key={i} src={_response.data[i].url}></ImageLoader>);

    if (props.expandable)
      arr.push(<LoadMore link={deerLink} onClick={props.loadMoreFunction} />)
    return <>{arr}</>;
  };


  return (
    <div className='results-wrapper'>
      <div className={`gradient-wrapper ${props.popular && 'popular-wrapper'}`}>
        {props.title && <h2 className='display-title'>{props.title}</h2>}
        <div className={`solid-wrapper ${props.popular ? 'popular-layout' : 'standard-layout'}`}>
          {generateCardsFromResults(props.response)}
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay;