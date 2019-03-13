import React from "react";
import { render, cleanup } from 'test-utils';
import DragItem from "./DragItem";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragItem
    index={0}
    dragitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png",
        textitemBynameTextitemId: { id: 1, textitemLanguagesBytextitemId : [{ textvalue: "name"}]},
        textitemBypuzzletextTextitemId: { id: 2, textitemLanguagesBytextitemId : [{ textvalue: "puzzletext"}]},
      }
    }}/>);
  expect(container).toMatchSnapshot();
});

it("should show the DragItemContainer element", () => {
  const { queryByTestId } = render(<DragItem
    index={0}
    dragitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png",
        textitemBynameTextitemId: { id: 1, textitemLanguagesBytextitemId : [{ textvalue: "name"}]},
        textitemBypuzzletextTextitemId: { id: 2, textitemLanguagesBytextitemId : [{ textvalue: "puzzletext"}]},
      }
    }}/>);
  expect(queryByTestId("DragItemContainer")).toBeTruthy();
});