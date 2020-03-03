import React, { useState } from 'react';
import SearchOptionButtons from './search-option-button';

// This component pulls up a set of filtering options for the user to select between before submitting a query
const SearchOptions = (props) => {

  // Denotes the actively selected value
  const [value, setValue] = useState(25);
  const [selected, setSelected] = useState([true, false, false, false])
  const valueSet = props.valueSet;

  function handleClick(e) {
    e.preventDefault();

    let selectedArr = [false, false, false, false];
    selectedArr[e.target.value] = true;
    setSelected(selectedArr);

    props.activeButtonChanged(valueSet[e.target.value]);
  }

  // Generates a set of controlled components for the radio buttons
  function generateButtons(selectedArr) {
    let items = [];
    for (let i = 0; i < 4; i++)
      items.push(
      <div className='option-button-wrapper' key={`button-${i}`}>
        <button value={i} 
        className={`option-button-interior ${selectedArr[i] ? "selected" : "unselected"}`} 
        selected={selectedArr[i]} 
        onClick={e => handleClick(e)} 
        onChange={e => props.onChange}>{valueSet[i]}</button>
      </div>);
    return <>{items}</>;
  }

  return (
    <div className='search-options-wrapper'>
      <div className='search-options-container'>
        <h2>{props.title}</h2>
        <form className='search-option-buttons'>
          {generateButtons(selected)}
        </form>
      </div>
    </div>
  )
}

export default SearchOptions;