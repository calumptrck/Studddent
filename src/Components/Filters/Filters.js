import React from 'react';
import './Filters.css'

import Search from './Search/Search';
import FilterButton from '../Buttons/FilterButton';

const Filters = ({buttons, buttonClick, searchUpdate}) =>
  <div className="container filtersContainer">
    <Search searchUpdate={searchUpdate} />
    <div className="filters">
    {buttons.map((button) =>
      <FilterButton 
        className={"filterButton" + (button.active ? " active" : " default")}
        key={button.id}
        onClick={() => buttonClick(button.id)}
        >{button.label}
        </FilterButton>
    )}
    </div>
  </div>


export default Filters;