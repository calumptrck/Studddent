import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './Filters';
import renderer from 'react-test-renderer';
import FilterButton from '../Buttons/FilterButton';
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


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

const onButtonClick = jest.fn()

const buttonClick = (id) => {
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
    ReactDOM.render(<Filters onClick={onButtonClick} buttons={buttons} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has one active button', () => {
    const expected = [{
      id: 0,
      label: "ALL",
      active: false,
    },
    {
      id: 1,
      label: "DESIGN",
      active: true,
    }]
    const wrapper = shallow(<Filters buttonClick={buttonClick} buttons={buttons} />)
    wrapper.find('.default').first().simulate('click')
    expect(buttons).toEqual(expect.arrayContaining(expected));
  });
});