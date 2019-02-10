import React from 'react';
import { shallow } from 'enzyme';
import PuzzleList from './PuzzleItems';
import DragItems from './DragItems/DragItems';
import DragLogics from './DragLogics/DragLogics';
import TargetItems from './TargetItems/TargetItems';
import PuzzleItemProperties from './PuzzleItemProperties/PuzzleItemProperties';

describe('PuzzleList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<PuzzleList />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a PuzzleItemsContainer', () => {
    expect(wrapper.find('PuzzleItemsContainer').length).toEqual(1);
  });
  it("should render the DragItems component", () => {
    expect(wrapper.containsMatchingElement(<DragItems />)).toEqual(true);
  });
  it("should render the DragLogics component", () => {
    expect(wrapper.containsMatchingElement(<DragLogics />)).toEqual(true);
  });
  it("should render the TargetItems component", () => {
    expect(wrapper.containsMatchingElement(<TargetItems />)).toEqual(true);
  });
  it("should render the PuzzleItemProperties component", () => {
    expect(wrapper.containsMatchingElement(<PuzzleItemProperties />)).toEqual(true);
  });

});