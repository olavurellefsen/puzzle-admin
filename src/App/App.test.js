import React from 'react'
import { shallow } from 'enzyme';
import App from './App';
import Scenes from '../Scenes/Scenes';

describe('App structure', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render an AppContainer', () => {
    expect(wrapper.find('AppContainer').length).toEqual(1);
  });
  it('should render the Scenes component', () => {
    expect(wrapper.containsMatchingElement(<Scenes />)).toEqual(true);
  });
});
