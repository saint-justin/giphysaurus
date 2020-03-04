import React, { useState } from 'react';

// These are the individual clickable buttons within the filter breakout
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
    <button className={selected ? 'selected' : 'unselected'} onClick={makeOnClick(props.onClick)} value={props.value}>{props.text}</button>
  )
}

export default SearchOptionButton;