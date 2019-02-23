import React from "react";
import { render, cleanup } from 'test-utils';
import SceneList from "./SceneList";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<SceneList />);
  expect(container).toMatchSnapshot();
});

it("should show the SceneListContainer element", () => {
  const { queryByTestId } = render(<SceneList />);
  expect(queryByTestId("SceneListContainer")).toBeTruthy();
});