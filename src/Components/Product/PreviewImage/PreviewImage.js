import React from 'react';
import './PreviewImage.css'

const PreviewImage = ({ src }) =>
  <div className="previewImage">
    <span className="helper"></span>
    <img src={src} alt="preview" />
  </div>

  export default PreviewImage