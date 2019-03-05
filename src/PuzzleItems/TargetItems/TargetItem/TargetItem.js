import React from "react";
import {   TargetItemContainer,
  TargetItemTopContent,
  TargetItemImage,
  TargetItemBubbleText,
  TargetItemFieldCaption,
  TargetItemField,
  TargetItemRestContent } from "./TargetItem.style";

export default props => {
  const { index, targetitem } = props;
  return (
    <TargetItemContainer
      data-testid="TargetItemContainer"
      className={`target${targetitem.id}`}
      id={`target${targetitem.id}`}
    >
      <TargetItemTopContent>
        <TargetItemImage
          key={index}
          src={`images/puzzleitems/${
            targetitem.puzzleItemBypuzzleItemId.imagefile
          }`}
          data-testid="TargetItemsImage"
        />
        <TargetItemBubbleText>
          <TargetItemFieldCaption>Bubble text</TargetItemFieldCaption>
          <TargetItemField>
            {targetitem.puzzleItemBypuzzleItemId.itemBybubbleTextId.value}
          </TargetItemField>
        </TargetItemBubbleText>
      </TargetItemTopContent>
      <TargetItemRestContent>
        <TargetItemFieldCaption>Name</TargetItemFieldCaption>
        <TargetItemField>{targetitem.puzzleItemBypuzzleItemId.name}</TargetItemField>
      </TargetItemRestContent>
    </TargetItemContainer>
  );
};
