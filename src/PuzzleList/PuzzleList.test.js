import React from "react";
import { shallow, mount } from "enzyme";
import MainContextStore from "../MainContextStore";
import PuzzleList from "./PuzzleList";
import { ApolloProvider } from "react-apollo";
import client from "../heyBreydLocalizationClient";

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
        <ApolloProvider client={client}>
          <MainContextStore>
            <PuzzleList />
          </MainContextStore>
        </ApolloProvider>
      ))
  );

  it("should render a PuzzleListContainer", () => {
    expect(wrapper.find("PuzzleListContainer").length).toEqual(1);
  });
});
