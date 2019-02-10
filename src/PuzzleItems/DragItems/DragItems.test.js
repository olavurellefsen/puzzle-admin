import React from 'react';
import { shallow, mount } from 'enzyme';
import MainContextStore from '../../MainContextStore';
import DragItems from './DragItems';
import { DragItemsImage } from './DragItems.style';

describe('DragItems', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MainContextStore>
        <DragItems />
      </MainContextStore>
    );
  });
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});

describe('mounted DragItems', () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = mount(
        <MainContextStore>
          <DragItems sceneId={1} />
        </MainContextStore>
      ))
  );
  it('should render a DragItemsContainer', () => {
    expect(wrapper.find('DragItemsContainer').length).toEqual(1);
  });
  it('should render the a placeholder image', () => {
    expect(wrapper.containsMatchingElement(<DragItemsImage />)).toEqual(true);
  });
});