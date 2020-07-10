import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('Home', () => {
  it('should render without crashing (mount)', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'statickey' }]}>
        <Home />
      </MemoryRouter>,
    );
    expect(wrapper.find('#home')).toHaveLength(1);
    wrapper.unmount();
  });
});
