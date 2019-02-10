import React from 'react';
import { shallow } from 'enzyme';
import PuzzleList from './PuzzleList';
import Puzzle from './Puzzle/Puzzle';

describe('PuzzleList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<PuzzleList />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a PuzzleListContainer', () => {
    expect(wrapper.find('PuzzleListContainer').length).toEqual(1);
  });
  it("should render the Puzzle component", () => {
    expect(wrapper.containsMatchingElement(<Puzzle />)).toEqual(true);
  });

});