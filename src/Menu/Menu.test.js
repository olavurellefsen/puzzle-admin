import React from "react";
import { render, cleanup } from 'test-utils';
import Menu from "./Menu";
afterEach(cleanup)

const auth = { isAuthenticated: () => false}
it("should render correctly", () => {
  const { container } = render(<Menu auth={auth} />);
  expect(container).toMatchSnapshot();
});

it("should show the words Puzzle Admin System", () => {
  const { getByText } = render(<Menu auth={auth} />);
  expect(getByText("Puzzle Admin System")).toBeTruthy();
});