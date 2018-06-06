import React from 'react';
import './FilterButton.css'

const FilterButton = ({children, id, className, onClick}) =>
    <button type="button" className={className} id={id} onClick={onClick}>{children}</button>

export default FilterButton