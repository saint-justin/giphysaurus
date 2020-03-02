import React, { useState } from 'react';
import SearchOptionButtons from './search-option-button';

const SearchOptions = (props) => {

  // Denotes the actively selected value
  const [value, setValue] = useState(25);
  const [selected, setSelected] = useState([true, false, false, false])

  function handleClick(e){
    console.log(e.target.value);
    console.log('beep');

    let selectedArr = [false, false, false, false];
    selectedArr[e.target.value] = true;
    setSelected(selectedArr);

    console.log(selectedArr);
    console.log(e.target.selected);

  }

  return (
    <div className='search-options-row'>
      <h2>Section Title</h2>
      <div className='search-option-buttons'>
        <SearchOptionButtons text='25' value={0} selected={selected[0]} onClick={e => handleClick(e)}/>
        <SearchOptionButtons text='50' value={1} selected={selected[1]} onClick={e => handleClick(e)}/>
        <SearchOptionButtons text='75' value={2} selected={selected[2]} onClick={e => handleClick(e)}/>
        <SearchOptionButtons text='100' value={3} selected={selected[3]} onClick={e => handleClick(e)}/>
      </div>
    </div>
  )
}

export default SearchOptions;