import React from "react";
import { render, cleanup } from 'test-utils';
import App from "./App";
afterEach(cleanup)

const auth = { isAuthenticated: () => false}
it("should render correctly", () => {
  const { container } = render(<App auth={auth} />);
  expect(container).toMatchSnapshot();
});

it("should show the words Puzzle Admin System", () => {
  const { getByText } = render(<App auth={auth} />);
  expect(getByText("Puzzle Admin System")).toBeTruthy();
});