import React from 'react';
import { shallow } from 'enzyme';
import DragItems from './DragItems';

describe('DragItems', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DragItems />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a DragItemsContainer', () => {
    expect(wrapper.find('DragItemsContainer').length).toEqual(1);
  });
});