import React from 'react';
import './SearchBox.css';

const SearchBox = (props) =>{
  return (
    <input 
      className='search'
      type='search' 
      placeholder='search monster' 
      onChange={props.handleChange}/>
  )
}

export default SearchBox;
