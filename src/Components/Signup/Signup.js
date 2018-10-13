import React from 'react';
import './Signup.css'

import MoreButton from '../Buttons/MoreButton'

const Signup = ({ url, children }) =>
  <div className="signup">
    <h4 className="mailtitle mt-3">Interested in this project?</h4>
    <p className="maildesc mb-4">Sign up below to receive notifications for trending discounts, and updates on the project.</p>
    <div id="mc_embed_signup">
      <form action="https://calumpatrick.us3.list-manage.com/subscribe/post?u=b22b8149f5595dcf86cd74955&amp;id=0385a5d217" method="post"
        id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <div className="form-group">
            <label htmlFor="mce-EMAIL">Email Address</label>
            <input type="email" name="EMAIL" className="required form-control" id="mce-EMAIL" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response"></div>
            <div className="response" id="mce-success-response"></div>
          </div>
          <div className="hiddenInput" aria-hidden="true">
            <input type="text" name="b_b22b8149f5595dcf86cd74955_0385a5d217" tabIndex="-1" value="" />
          </div>
          <div className="clear">
            <MoreButton type="submit">Subscribe</MoreButton>
          </div>
        </div>
      </form>
    </div>
  </div>

export default Signup