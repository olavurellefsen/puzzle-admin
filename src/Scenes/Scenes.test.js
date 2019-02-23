import React from "react";
import { render, cleanup } from 'test-utils';
import Scenes from "./Scenes";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<Scenes />);
  expect(container).toMatchSnapshot();
});

it("should show the ScenesContainer element", () => {
  const { queryByTestId } = render(<Scenes />);
  expect(queryByTestId("ScenesContainer")).toBeTruthy();
});

it("should show the SceneListContainer element", () => {
  const { queryByTestId } = render(<Scenes />);
  expect(queryByTestId("SceneListContainer")).toBeTruthy();
});

it("should show the PuzzleListContainer element", () => {
  const { queryByTestId } = render(<Scenes />);
  expect(queryByTestId("PuzzleListContainer")).toBeTruthy();
});

it("should show the PuzzleItemsContainer element", () => {
  const { queryByTestId } = render(<Scenes />);
  expect(queryByTestId("PuzzleItemsContainer")).toBeTruthy();
});