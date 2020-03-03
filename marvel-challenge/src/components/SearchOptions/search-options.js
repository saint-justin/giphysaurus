import React, { useState } from 'react';
import SearchOptionButtons from './search-option-button';

const SearchOptions = (props) => {

  // Denotes the actively selected value
  const [value, setValue] = useState(25);
  const [selected, setSelected] = useState([true, false, false, false])
  const valueSet = [25, 50, 75, 100];

  function handleClick(e) {
    e.preventDefault();

    let selectedArr = [false, false, false, false];
    selectedArr[e.target.value] = true;
    setSelected(selectedArr);
  }

  // Generates a set of controlled components for the radio buttons
  function generateButtons(selectedArr) {
    let items = [];
    for (let i = 0; i < 4; i++)
      items.push(<div className='option-button-wrapper'><button value={i} className={`option-button-interior ${selectedArr[i] ? "selected" : "unselected"}`} selected={selectedArr[i]} onClick={e => handleClick(e)}>{valueSet[i]}</button></div>);
    return <>{items}</>;
  }

  return (
    <div className='search-options-wrapper'>
      <div className='search-options-container'>
        <h2>Section Title</h2>
        <form className='search-option-buttons'>
          {generateButtons(selected)}
        </form>
      </div>
    </div>
  )
}

export default SearchOptions;