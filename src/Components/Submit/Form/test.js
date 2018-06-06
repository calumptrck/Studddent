import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

