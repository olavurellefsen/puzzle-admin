import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../../MainContextStore";
import Scene from "./Scene";
import { SceneImage } from "./Scene.style";

describe("Scene", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MainContextStore>
        <Scene />
      </MainContextStore>
    );
  });
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

describe("mounted Scene", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = mount(
        <MainContextStore>
          <Scene scene={{ id: 2, title: 'køkurin' }} />
        </MainContextStore>
      ))
  );
  it("should render a SceneContainer", () => {
    expect(wrapper.find("SceneContainer").length).toEqual(1);
    wrapper.unmount();
  });
  it("should render an image", () => {
    expect(wrapper.containsMatchingElement(<SceneImage />)).toEqual(true);
    wrapper.unmount();
  });
  it("should render a title", () => {
    expect(wrapper.find("SceneTitle").length).toEqual(1);
    wrapper.unmount();
  });
  // Does not work because Enzyme does not work with hooks yet, see e.g. https://github.com/airbnb/enzyme/issues/1996
  // it("should be possible to change the title", () => {
  //   let sceneTitle = wrapper.find("SceneTitle").find("input");
  //   sceneTitle.simulate('change', { target: { value: 'Hello' } });
  //   expect(wrapper.find("SceneTitle").text()).toEqual('Hello');
  //   wrapper.unmount();
  // })
  it("should become selected if it is clicked", () => {
    expect(wrapper.find('SceneContainer').prop('selected')).toEqual(false);
    wrapper.find("SceneImage").simulate("click");
    expect(wrapper.find('SceneContainer').prop('selected')).toEqual(true);
    wrapper.unmount();
  });
});
