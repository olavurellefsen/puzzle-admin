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
          <Scene sceneId={1} />
        </MainContextStore>
      ))
  );
  it("should render a SceneContainer", () => {
    expect(wrapper.find("SceneContainer").length).toEqual(1);
  });
  it("should render the a placeholder image", () => {
    expect(wrapper.containsMatchingElement(<SceneImage />)).toEqual(true);
  });
});
