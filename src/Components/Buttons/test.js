import React from 'react';
import ReactDOM from 'react-dom';

import AddButton from './AddButton';
import FilterButton from './FilterButton';
import GetButton from './GetButton';
import MoreButton from './MoreButton';

const filterClick = jest.fn();


describe('Buttons Render', () => {
  it('MoreButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoreButton type="button" showMore={filterClick}>MoreButton</MoreButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('AddButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddButton>AddButton</AddButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('FilterButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterButton onClick={filterClick} id="foo" className="bar">FilterButton</FilterButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('GetButton renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetButton url="#">GetButton</GetButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
