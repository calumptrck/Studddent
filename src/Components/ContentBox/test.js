import React from 'react';
import ReactDOM from 'react-dom';
import ContentBox from './ContentBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

