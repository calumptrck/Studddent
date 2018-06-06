import React, { Component } from 'react';
import './Submit.css'

import Header from '../Header/Header'
import ContentBox from '../ContentBox/ContentBox'
import Form from './Form/Form'

class Submit extends Component {
  render() {
    return (
      <div>
        <Header>
          <a href="/"><h1 className="submit"> Submit A Discount</h1></a>
        </Header>
        <ContentBox>
          <Form />
        </ContentBox>
      </div>
    );
  }
}


export default Submit