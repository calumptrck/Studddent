import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import renderer from 'react-test-renderer';

const tags = ['design', 'development', 'utility']

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Signup />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});