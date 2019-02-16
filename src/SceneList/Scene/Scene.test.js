import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../../MainContextStore";
import Scene from "./Scene";
import { SceneImage, SceneImageText } from "./Scene.style";

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
          <Scene scene={[{ id: 2 }]} />
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
    expect(wrapper.containsMatchingElement(<SceneImageText />)).toEqual(true);
    wrapper.unmount();
  });
  it("should become selected if it is clicked", () => {
    expect(wrapper.find('img').prop('selected')).toEqual(false);
    wrapper.find("SceneImage").simulate("click");
    expect(wrapper.find('img').prop('selected')).toEqual(true);
    wrapper.unmount();
  });
});
