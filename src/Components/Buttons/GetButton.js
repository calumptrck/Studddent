import React from 'react';
import './GetButton.css'

const GetButton = ({url, children}) =>
  <a href={url}>
    <button type="button" className="getButton grow2 shadow2">{children}</button>
  </a>

export default GetButton