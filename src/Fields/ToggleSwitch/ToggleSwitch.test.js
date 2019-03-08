import React from "react";
import { render, fireEvent, cleanup } from 'test-utils';
import ToggleSwitch from "./ToggleSwitch";
afterEach(cleanup)

it("should call the onToggle function when clicked", () => {
  const onToggle = jest.fn();
  const { getByTestId  } = render(<ToggleSwitch onToggle={onToggle}/>);
  fireEvent.click(getByTestId("toggle"));
  expect(onToggle).toHaveBeenCalledTimes(1);
});