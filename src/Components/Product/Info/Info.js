import React from 'react';
import './Info.css'

import Tag from './Tag/Tag';

const Info = ({ title, promo, tags }) =>
  <div className="info">
    <div className="infoText">
      <h1>{title}</h1>
      <div className="promo">{promo}</div>
    </div>
    <div className="tags">
    {tags.map((tag) =>
      <Tag key={tag} label={tag.toUpperCase()} />
    )}
    </div>
  </div>

export default Info