import React from 'react';
import { shallow } from 'enzyme';
import TargetItem from './TargetItem';

describe('TargetItem', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TargetItem />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a TargetItemContainer', () => {
    expect(wrapper.find('TargetItemContainer').length).toEqual(1);
  });
});