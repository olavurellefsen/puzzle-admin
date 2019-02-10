import React from 'react';
import { shallow } from 'enzyme';
import Puzzle from './Puzzle';

describe('Puzzle', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Puzzle />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a PuzzleContainer', () => {
    expect(wrapper.find('PuzzleContainer').length).toEqual(1);
  });
});