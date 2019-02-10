import React from 'react';
import { shallow } from 'enzyme';
import DragLogics from './DragLogics';

describe('DragLogics', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DragLogics />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a DragLogicsContainer', () => {
    expect(wrapper.find('DragLogicsContainer').length).toEqual(1);
  });
});