import React from "react";
import { render, cleanup } from 'test-utils';
import Home from "./Home";
afterEach(cleanup)

it("should render correctly", () => {
  const auth = { isAuthenticated: () => false}
  const { container } = render(<Home auth={auth} />);
  expect(container).toMatchSnapshot();
});

it("should show the Scenes component when authenticated", () => {
  const auth = { isAuthenticated: () => true}
  const { queryByTestId } = render(<Home auth={auth} />);
  expect(queryByTestId("Scenes")).not.toBeNull();
});

it("should show nothing when not authenticated", () => {
  const auth = { isAuthenticated: () => false}
  const { queryByTestId } = render(<Home auth={auth} />);
  expect(queryByTestId("Scenes")).toBeNull();
});