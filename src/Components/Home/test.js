import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});