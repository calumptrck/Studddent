import React from 'react';
import './Header.css'


const Header = ({buttonText, children}) =>
  <div className="header">
    <div className="container">
      {children}
    </div>
  </div>


export default Header;
