import React from 'react';
import ReactDOM from 'react-dom';

import AddButton from './AddButton';
import FilterButton from './FilterButton';
import GetButton from './GetButton';
import MoreButton from './MoreButton';

const filterClick = jest.fn();


describe('Buttons Render', () => {
  it('AddButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddButton>Test Button</AddButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('FilterButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterButton onClick={filterClick} id="foo" className="bar">Test Button</FilterButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('GetButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetButton url="#">Test Button</GetButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('MoreButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoreButton type="button" showMore={filterClick}>Test Button</MoreButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
