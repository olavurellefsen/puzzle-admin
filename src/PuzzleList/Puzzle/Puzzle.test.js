import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../../MainContextStore";
import Puzzle from "./Puzzle";
import { ApolloProvider } from "react-apollo";
import client from "../../heyBreydLocalizationClient";

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
        <ApolloProvider client={client}>
          <MainContextStore>
            <Puzzle puzzle={{ id: 1, scene_id: 1 }} currentPuzzleId={2} />
          </MainContextStore>
        </ApolloProvider>
      ))
  );
  it("should render a PuzzleContainer", () => {
    expect(wrapper.find("PuzzleContainer").length).toEqual(1);
    wrapper.unmount();
  });
});
