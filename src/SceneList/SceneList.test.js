import React from "react";
import { shallow } from "enzyme";
import SceneList from "./SceneList";
import Scene from "./Scene/Scene";

describe("SceneList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <SceneList />
    );
  });

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
  it("should render a SceneListContainer", () => {
    expect(wrapper.find("SceneListContainer").length).toEqual(1);
  });
  it("should render the Scene component", () => {
    expect(wrapper.containsMatchingElement(<Scene />)).toEqual(true);
  });
});
