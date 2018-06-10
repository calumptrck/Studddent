import React from 'react';
import './Voting.css'

import GetButton from '../../Buttons/GetButton'

const Voting = ({ product, upVote, downVote, voteClass }) =>
  <div className="voting">
    <div className="visit">
      <GetButton url={product.url}>VIEW</GetButton>
    </div>
    <div className="score">
      <div className="upThumb" onClick={() => upVote(product._id)} href="#"><i className={"fa fa-thumbs-up " + voteClass} aria-hidden="true"></i></div>
      <p>{product.votes.up - product.votes.down}</p>
      <div className="downThumb" onClick={() => downVote(product._id)}><i className={"fa fa-thumbs-down " + voteClass} aria-hidden="true"></i></div>
    </div>
  </div>

export default Voting