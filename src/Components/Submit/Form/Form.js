import React from 'react';
import './Form.css'

import MoreButton from '../../Buttons/MoreButton';

const Form = ({url, children}) =>
<div className="addForm mt-5">
<form action="https://studddent.com/api/newpost" method="POST" name="addForm">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name of Discount</label>
    <input required="true" name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg. Amazon Prime" />
    <small id="text" className="form-text text-muted">This will be the headline of your post</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Discount URL</label>
    <input required="true" name="url" type="url" className="form-control" id="exampleInputPassword1" placeholder="https://www.amazon.ca/b?node=9648404011" />
  </div>
  <div className="form-group">
    <label htmlFor="lengthOfPromo">Length of Promo</label>
    <input required="true" name="feature" type="text" className="form-control" id="exampleInputPassword1" placeholder="eg. Free While You're a Student" />
  </div>
  <hr />

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Primary Feature</label>
    <input name="f1" type="text" maxLength="40" className="form-control" id="exampleInputPassword1" placeholder="eg. Free Two-Day Shipping" />
    <small required="true" id="text" className="form-text text-muted">required</small>
  </div>
  <div className="form-group">
    <label htmlFor="lengthOfPromo">Second Feature</label>
    <input name="f2" type="text" maxLength="40" className="form-control" id="exampleInputPassword1" placeholder="eg. Photo Storage" />
    <small id="text" className="form-text text-muted">optional</small>
  </div>
  <div className="form-group">
    <label htmlFor="lengthOfPromo">Third Feature</label>
    <input name="f3" type="text" maxLength="40" className="form-control" id="exampleInputPassword1" placeholder="eg. Twitch Prime Included" />
    <small id="text" className="form-text text-muted">optional</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Thumbnail Image URL</label>
    <input name="image" type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="https://" />
  </div><hr />
  <div className="form-group mt-4">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input required="false" name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg. calum@calum.co" />
    <small id="text" className="form-text text-muted">We'll let you know when your submission is accepted!</small>
  </div>
  <div className="submitButton">
    <MoreButton type={"submit"}>Submit</MoreButton>
  </div>
</form>
</div>

export default Form