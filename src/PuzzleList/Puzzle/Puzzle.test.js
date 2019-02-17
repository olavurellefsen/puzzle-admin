import React from 'react';
import { shallow, mount } from 'enzyme';
import MainContextStore from '../../MainContextStore';
import Puzzle from './Puzzle';
import { PuzzleImage } from './Puzzle.style';

describe('Puzzle', () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <MainContextStore>
          <Puzzle />
        </MainContextStore>
      ))
  );

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});

describe('mounted Puzzle', () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = mount(
        <MainContextStore>
          <Puzzle puzzle={{id: 1}} />
        </MainContextStore>
      ))
  );
  it('should render a PuzzleContainer', () => {
    expect(wrapper.find('PuzzleContainer').length).toEqual(1);
    wrapper.unmount();
  });
  it('should become selected if it is clicked', () => {
    expect(wrapper.find('PuzzleContainer').prop('selected')).toEqual(false);
    wrapper.find('PuzzleContainer').simulate('click');
    expect(wrapper.find('PuzzleContainer').prop('selected')).toEqual(true);
    wrapper.unmount();
  });
});
