import React from 'react';
import axios from 'axios';
import Registration from './Registration';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('Registration', () => {
  it('should render without crashing (mount)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'statickey' }]}>
        <Registration />
      </MemoryRouter>,
    );
    expect(wrapper.find('#registration')).toHaveLength(1);
  });

  it('fetches successfully data from an API', async () => {
    const data = {
      registrationId: 'fake-registration-id',
    };

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: data }),
    );

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'statickey' }]}>
        <Registration />
      </MemoryRouter>,
    );
    await act(async () => {
      const form = wrapper.find('form');
      form.simulate('submit');
    });
    wrapper.update();
    expect(wrapper.find('#successful-registration')).toHaveLength(1);
    wrapper.unmount();
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'statickey' }]}>
        <Registration />
      </MemoryRouter>,
    );
    await act(async () => {
      const form = wrapper.find('form');
      form.simulate('submit');
    });
    wrapper.update();

    expect(wrapper.find('#successful-registration')).toHaveLength(0);
    wrapper.unmount();
  });

  it('fetches error list from an API', async () => {
    const data = {
      errors: { 'organisation.Name': ['The Name field is required.'] },
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      traceId: '|4d9eca6e-4029ce5286ff4fc9.',
    };
    axios.post.mockImplementationOnce(() =>
      Promise.reject({
        response: { status: 400, statusText: 'Bad Request', data: data },
      }),
    );

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'statickey' }]}>
        <Registration />
      </MemoryRouter>,
    );
    await act(async () => {
      const form = wrapper.find('form');
      form.simulate('submit');
    });
    wrapper.update();
    expect(wrapper.find('#organisation-name-text-input-error-0')).toHaveLength(
      1,
    );
    wrapper.unmount();
  });
});
