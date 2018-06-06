import React from 'react';
import './GetButton.css'

const MoreButton = ({children, showMore, type}) =>
    <button onClick={showMore} className="getButton grow2 shadow2" type={type}>{children}</button>

export default MoreButton