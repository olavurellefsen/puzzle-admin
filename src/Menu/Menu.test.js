import React from 'react'
import { shallow, mount } from 'enzyme';
import Menu from './Menu';
import MainContextStore from "../MainContextStore";

describe('Menu structure', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<MainContextStore><Menu /></MainContextStore>));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
});

describe('Mounted Menu', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<MainContextStore><Menu /></MainContextStore>));
  it('should render an MenuContainer', () => {
    expect(wrapper.find('MenuContainer').length).toEqual(1);
    wrapper.unmount();
  });
});