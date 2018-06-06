import React from 'react';
import './ContentBox.css'

const ContentBox = ({children}) =>
  <div className="container">
    <div className="contentBox">
    {children}
    </div>
  </div>


export default ContentBox;