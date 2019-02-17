import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../MainContextStore";
import PuzzleList from "./PuzzleList";
import Puzzle from "./Puzzle/Puzzle";

describe("PuzzleList", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <MainContextStore>
          <PuzzleList />
        </MainContextStore>
      ))
  );
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

describe("mounted PuzzleList", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = mount(
        <MainContextStore>
          <PuzzleList />
        </MainContextStore>
      ))
  );

  it("should render a PuzzleListContainer", () => {
    expect(wrapper.find("PuzzleListContainer").length).toEqual(1);
  });
  it("should render the Puzzle component", () => {
    expect(wrapper.containsMatchingElement(<Puzzle />)).toEqual(true);
  });
});
