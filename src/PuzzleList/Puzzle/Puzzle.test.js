import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../../MainContextStore";
import Puzzle from "./Puzzle";
import { PuzzleImage } from "./Puzzle.style";

describe("Puzzle", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <MainContextStore>
          <Puzzle />
        </MainContextStore>
      ))
  );

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

describe("mounted Puzzle", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = mount(
        <MainContextStore>
          <Puzzle sceneId={1} />
        </MainContextStore>
      ))
  );
  it("should render a PuzzleContainer", () => {
    expect(wrapper.find("PuzzleContainer").length).toEqual(1);
    wrapper.unmount();
  });
  it("should render the a placeholder image", () => {
    expect(wrapper.containsMatchingElement(<PuzzleImage />)).toEqual(true);
    wrapper.unmount();
  });
});
