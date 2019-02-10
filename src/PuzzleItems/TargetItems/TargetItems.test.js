import React from 'react';
import { shallow } from 'enzyme';
import TargetItems from './TargetItems';

describe('TargetItems', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TargetItems />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a TargetItemsContainer', () => {
    expect(wrapper.find('TargetItemsContainer').length).toEqual(1);
  });
});