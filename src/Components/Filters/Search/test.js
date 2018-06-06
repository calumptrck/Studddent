import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

// Todo - Number of callbacks after entering a word

const searcUpdate = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search searchUpdate={searcUpdate} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

