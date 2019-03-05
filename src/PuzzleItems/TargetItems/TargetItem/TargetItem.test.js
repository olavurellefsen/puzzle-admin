import React from "react";
import { render, cleanup } from "test-utils";
import TargetItem from "./TargetItem";
afterEach(cleanup);

it("should render correctly", () => {
  const { container } = render(
    <TargetItem
      index={0}
      targetitem={{
        id: 0,
        puzzleItemBypuzzleItemId: {
          name: "dummy name",
          imagefile: "dummyimage.png",
          itemBybubbleTextId: { value: "dummy bubble text" }
        }
      }}
    />
  );
  expect(container).toMatchSnapshot();
});

it("should show the TargetItemContainer element", () => {
  const { queryByTestId } = render(
    <TargetItem
      index={0}
      targetitem={{
        id: 0,
        puzzleItemBypuzzleItemId: {
          name: "dummy name",
          imagefile: "dummyimage.png",
          itemBybubbleTextId: { value: "dummy bubble text" }
        }
      }}
    />
  );
  expect(queryByTestId("TargetItemContainer")).toBeTruthy();
});
