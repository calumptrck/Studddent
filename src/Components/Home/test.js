import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// Render & Snapshot

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

  test('Search Updates State', () => {
    const wrap = mount(
      <Home />
    )

    wrap.find('input').simulate('change', {
      target: { value: 'Microsoft' }
    })

    wrap.update()
    expect(wrap.state('searchTerm')).toEqual('Microsoft');
  });

});

// API updates state properly

const DELAY_MS = 1000

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchTasks = async (url) => {
  try {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson
  }
  catch (e) {
    console.log(`fetchResponseJson failed:`, e)
  }
}

describe(`Mocking fetch`, () => {
  test(`on Home componentDidMount`, async () => {
    const wrapper = shallow(<Home />)
    await wrapper.instance().componentDidMount()
    await sleep(DELAY_MS)
    expect(wrapper.state('products')).not.toContain(null)
    expect(wrapper.state('error')).toEqual(null)

    // Force update to sync component with state
    wrapper.update()

  })

  test(`on Home componentDidMount`, async () => {
    const wrapper = mount(<Home />)
    await wrapper.instance().componentDidMount()
    await sleep(DELAY_MS)
    const expectedCount = wrapper.state('products')[0].votes.down;
    await wrapper.instance().upVote('5a9c3bfc1f50583c497f0ee9')
    await sleep(100);
    await wrapper.instance().downVote('5a9c3bfc1f50583c497f0ee9')
    await sleep(100);
    await wrapper.instance().upVote('5a9c3bfc1f50583c497f0ee9')
    await sleep(100);
    await wrapper.instance().upVote('5a9c3bfc1f50583c497f0ee9')
    await sleep(100);
    expect(wrapper.state('products')[0].votes.down).toEqual(expectedCount)

  })

})