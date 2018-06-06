import React from 'react';
import './Search.css'

const Search = ({searchUpdate}) =>
  <input onChange={searchUpdate} name="email" type="text"  id="search" aria-describedby="search" placeholder="Search for products" autoComplete="off"/>


export default Search;




