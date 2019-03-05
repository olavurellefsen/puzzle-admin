import React from "react";
import { DragItemContainer, DragItemImage } from "./DragItem.style";

export default props => {
  const { index, dragitem } = props;
  return (
    <DragItemContainer
      data-testid="DragItemContainer"
      className={`drag${dragitem.id}`}
      id={`drag${dragitem.id}`}
    >
      <DragItemImage
        key={index}
        src={`images/puzzleitems/${
          dragitem.puzzleItemBypuzzleItemId.imagefile
        }`}
        data-testid="DragItemsImage"
      />
    </DragItemContainer>
  );
};
