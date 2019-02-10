import React from 'react';
import { shallow } from 'enzyme';
import DragLogic from './DragLogic';

describe('DragLogic', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DragLogic />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a DragLogicContainer', () => {
    expect(wrapper.find('DragLogicContainer').length).toEqual(1);
  });
});