import React, { useState } from 'react';

// Search bar to be used at the top of the site
const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <input type='text' onChange={e => setInput(e.target.value)} value={input} />
  )
}

export default SearchBar;