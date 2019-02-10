import React from 'react'
import { shallow } from 'enzyme';
import App from './App';
import SceneList from '../SceneList/SceneList';

describe('App structure', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render an AppContainer', () => {
    expect(wrapper.find('AppContainer').length).toEqual(1);
  });
  it('should render the SceneList component', () => {
    expect(wrapper.containsMatchingElement(<SceneList />)).toEqual(true);
  });
});
