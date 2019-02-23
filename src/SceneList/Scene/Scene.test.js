import React from "react";
import { render, cleanup } from 'test-utils';
import Scene from "./Scene";
afterEach(cleanup)

const scene = { id: 1, title: "Lorum ipsum", image_filename: "Dummy filename" };

it("should render correctly", () => {
  const { container } = render(<Scene scene={scene} />);
  expect(container).toMatchSnapshot();
});

it("should show the SceneContainer element", () => {
  const { queryByTestId } = render(<Scene scene={scene} />);
  expect(queryByTestId("SceneContainer")).toBeTruthy();
});