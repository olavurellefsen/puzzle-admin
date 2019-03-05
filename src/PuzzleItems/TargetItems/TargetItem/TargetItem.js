import React from "react";
import { TargetItemContainer, TargetItemImage } from "./TargetItem.style";

export default props => {
  const { index, targetitem } = props;
  return (
    <TargetItemContainer
      data-testid="TargetItemContainer"
      className={`target${targetitem.id}`}
      id={`target${targetitem.id}`}
    >
      <TargetItemImage
        key={index}
        src={`images/puzzleitems/${
          targetitem.puzzleItemBypuzzleItemId.imagefile
        }`}
        data-testid="TargetItemsImage"
      />
    </TargetItemContainer>
  );
};
