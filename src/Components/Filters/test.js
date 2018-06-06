import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './Filters';
import renderer from 'react-test-renderer';
import FilterButton from '../Buttons/FilterButton';



const buttons = [
  {
    id: 0,
    label: "ALL",
    active: true,
  },
  {
    id: 1,
    label: "DESIGN",
    active: false,
  },
  {
    id: 2,
    label: "DEVELOPMENT",
    active: false,
  },
  {
    id: 3,
    label: "UTILITY",
    active: false,
  }
]

const buttonClick = function(id) {
  for (let i = 0; i < buttons.length; i++) {
    if (i === id) {
      buttons[i].active = true;
    } else {
      buttons[i].active = false;
    }
  }
}

describe('Filters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filters buttons={buttons} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has one active button', () => {
    const expected = [{
      id: 2,
      label: "DEVELOPMENT",
      active: true,
    },
    {
      id: 0,
      label: "ALL",
      active: false,
    }]
    const component = renderer.create(
      <FilterButton onClick={buttonClick(2)}/>);
    expect(buttons).toEqual(expect.arrayContaining(expected));
  });
});