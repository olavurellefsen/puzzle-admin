import React from 'react';
import { shallow } from 'enzyme';
import PuzzleItemProperties from './PuzzleItemProperties';

describe('PuzzleItemProperties', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<PuzzleItemProperties />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a PuzzleItemPropertiesContainer', () => {
    expect(wrapper.find('PuzzleItemPropertiesContainer').length).toEqual(1);
  });
});