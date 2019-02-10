import React from 'react';
import { shallow } from 'enzyme';
import DragItem from './DragItem';

describe('DragItem', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DragItem />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a DragItemContainer', () => {
    expect(wrapper.find('DragItemContainer').length).toEqual(1);
  });
});