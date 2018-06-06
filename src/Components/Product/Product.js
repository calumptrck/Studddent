import React from 'react';
import './Product.css'

import PreviewImage from './PreviewImage/PreviewImage';
import Info from './Info/Info';
import Voting from './Voting/Voting';

const Product = ({product, upVote, downVote, votes}) => {
  let upIndex = votes.up.indexOf(product._id);
  let downIndex = votes.down.indexOf(product._id);
  return (
  <div className="productBox">
    <PreviewImage src={product.image} />
    <Info title={product.name} promo={product.feature} tags={product.tags} />
    <Voting upVote={upVote} downVote={downVote} product={product} vote={upIndex >= 0 ? "up" : downIndex >= 0 ? "down" : "neutral"} />
  </div>
  );
}


export default Product;