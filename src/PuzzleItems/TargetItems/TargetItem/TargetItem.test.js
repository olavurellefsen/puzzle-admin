import React from "react";
import { render, cleanup } from 'test-utils';
import TargetItem from "./TargetItem";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<TargetItem index={0} targetitem={{id: 0, puzzleItemBypuzzleItemId: { imagefile: "dummy.png"}}}/>);
  expect(container).toMatchSnapshot();
});

it("should show the TargetItemContainer element", () => {
  const { queryByTestId } = render(<TargetItem index={0} targetitem={{id: 0, puzzleItemBypuzzleItemId: { imagefile: "dummy.png"}}}/>);
  expect(queryByTestId("TargetItemContainer")).toBeTruthy();
});