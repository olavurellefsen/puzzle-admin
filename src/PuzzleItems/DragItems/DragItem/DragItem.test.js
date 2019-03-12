import React from "react";
import { render, cleanup } from 'test-utils';
import DragItem from "./DragItem";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragItem
    index={0}
    dragitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png", itemBypuzzletextKey: { value: "dummy bubble text"}
      }
    }}/>);
  expect(container).toMatchSnapshot();
});

it("should show the DragItemContainer element", () => {
  const { queryByTestId } = render(<DragItem
    index={0}
    dragitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png", itemBypuzzletextKey: { value: "dummy bubble text"}
      }
    }}/>);
  expect(queryByTestId("DragItemContainer")).toBeTruthy();
});