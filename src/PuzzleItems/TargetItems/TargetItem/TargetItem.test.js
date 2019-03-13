import React from "react";
import { render, cleanup } from "test-utils";
import TargetItem from "./TargetItem";
afterEach(cleanup);

it("should render correctly", () => {
  const { container } = render(<TargetItem
    index={0}
    targetitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png",
        textitemBynameTextitemId: { id: 1, textitemLanguagesBytextitemId : [{ textvalue: "name"}]},
        textitemBypuzzletextTextitemId: { id: 2, textitemLanguagesBytextitemId : [{ textvalue: "puzzletext"}]},
      }
    }}/>);
  expect(container).toMatchSnapshot();
});

it("should show the TargetItemContainer element", () => {
  const { queryByTestId } = render(<TargetItem
    index={0}
    targetitem={{id: 0, puzzleItemBypuzzleItemId:
      { name: "dummy name",
        imagefile: "dummyimage.png",
        textitemBynameTextitemId: { id: 1, textitemLanguagesBytextitemId : [{ textvalue: "name"}]},
        textitemBypuzzletextTextitemId: { id: 2, textitemLanguagesBytextitemId : [{ textvalue: "puzzletext"}]},
      }
    }}/>);
  expect(queryByTestId("TargetItemContainer")).toBeTruthy();
});
