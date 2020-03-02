import React, { useState } from 'react';
// import SearchOptions from './search-options-toggle';

const SearchOptionButton = (props) => {
  const [selected, setSelected] = useState(props.selected);

  function makeOnClick(parentFunction) {
    return (e) => {
      e.preventDefault();

      parentFunction(e);
      setSelected(!selected);
    }
  }

  return (
    <>
      <button className={selected ? 'selected' : 'unselected'} onClick={makeOnClick(props.onClick)} value={props.value}>{props.text}</button>
    </>
  )
}

export default SearchOptionButton;