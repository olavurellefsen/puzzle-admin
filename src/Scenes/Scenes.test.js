import React from 'react';
import { shallow } from 'enzyme';
import SceneList from '../SceneList/SceneList';
import PuzzleList from '../PuzzleList/PuzzleList';
import PuzzleItems from '../PuzzleItems/PuzzleItems';
import Scenes from './Scenes';

describe('SceneList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Scenes />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a ScenesContainer', () => {
    expect(wrapper.find('ScenesContainer').length).toEqual(1);
  });
  it('should render the SceneList component', () => {
    expect(wrapper.containsMatchingElement(<SceneList />)).toEqual(true);
  });
  it('should render the PuzzleList component', () => {
    expect(wrapper.containsMatchingElement(<PuzzleList />)).toEqual(true);
  });
  it('should render the PuzzleItems component', () => {
    expect(wrapper.containsMatchingElement(<PuzzleItems />)).toEqual(true);
  });
});
