import React from 'react';
import './Form.css'

import MoreButton from '../../Buttons/MoreButton';

const Form = ({url, children}) =>
<div class="addForm mt-5">
<form action="https://studddent.com/api/newpost" method="POST" name="addForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Name of Discount</label>
    <input required="true" name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg. Amazon Prime" />
    <small id="text" class="form-text text-muted">This will be the headline of your post</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Discount URL</label>
    <input required="true" name="url" type="url" class="form-control" id="exampleInputPassword1" placeholder="https://www.amazon.ca/b?node=9648404011" />
  </div>
  <div class="form-group">
    <label for="lengthOfPromo">Length of Promo</label>
    <input required="true" name="feature" type="text" class="form-control" id="exampleInputPassword1" placeholder="eg. Free While You're a Student" />
  </div>
  <hr />

  <div class="form-group">
    <label for="exampleInputPassword1">Primary Feature</label>
    <input name="f1" type="text" maxlength="40" class="form-control" id="exampleInputPassword1" placeholder="eg. Free Two-Day Shipping" />
    <small required="true" id="text" class="form-text text-muted">required</small>
  </div>
  <div class="form-group">
    <label for="lengthOfPromo">Second Feature</label>
    <input name="f2" type="text" maxlength="40" class="form-control" id="exampleInputPassword1" placeholder="eg. Photo Storage" />
    <small id="text" class="form-text text-muted">optional</small>
  </div>
  <div class="form-group">
    <label for="lengthOfPromo">Third Feature</label>
    <input name="f3" type="text" maxlength="40" class="form-control" id="exampleInputPassword1" placeholder="eg. Twitch Prime Included" />
    <small id="text" class="form-text text-muted">optional</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Thumbnail Image URL</label>
    <input name="image" type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="https://" />
  </div><hr />
  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Email</label>
    <input required="false" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg. calum@calum.co" />
    <small id="text" class="form-text text-muted">We'll let you know when your submission is accepted!</small>
  </div>
  <div className="submitButton">
    <MoreButton type={"submit"}>Submit</MoreButton>
  </div>
</form>
</div>

export default Form