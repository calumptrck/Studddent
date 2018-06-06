import React from 'react';
import './AddButton.css'

const AddButton = ({children, path}) =>
  <a href={path}>
    <button type="button" className="btn addDiscount grow2 shadow2">{children}</button>
  </a>

export default AddButton