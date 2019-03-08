import React from "react";
import {
  DragItemContainer,
  DragItemTopContent,
  DragItemImage,
  DragItemBubbleText,
  DragItemFieldCaption,
  DragItemField,
  DragItemRestContent
} from "./DragItem.style";
import ToggleSwitch from '../../../Fields/ToggleSwitch/ToggleSwitch';

export default props => {
  const { index, dragitem } = props;
  return (
    <DragItemContainer
      data-testid="DragItemContainer"
      className={`drag${dragitem.id}`}
      id={`drag${dragitem.id}`}
    >
      <DragItemTopContent>
        <DragItemImage
          key={index}
          src={`images/puzzleitems/${
            dragitem.puzzleItemBypuzzleItemId.imagefile
          }`}
          data-testid="DragItemsImage"
        />
        <DragItemBubbleText>
          <DragItemFieldCaption>Bubble text</DragItemFieldCaption>
          <DragItemField>
            {dragitem.puzzleItemBypuzzleItemId.itemBybubbleTextId.value}
          </DragItemField>
        </DragItemBubbleText>
      </DragItemTopContent>
      <DragItemRestContent>
        <DragItemFieldCaption>Name</DragItemFieldCaption>
        <DragItemField>{dragitem.puzzleItemBypuzzleItemId.name}</DragItemField>
        <DragItemFieldCaption>Image file</DragItemFieldCaption>
        <DragItemField>{dragitem.puzzleItemBypuzzleItemId.imagefile}</DragItemField>
        <DragItemFieldCaption>Wait</DragItemFieldCaption>
        <ToggleSwitch 
          initial={dragitem.wait}
          onToggle={()=>{console.log("goggle")}}
        />
      </DragItemRestContent>
    </DragItemContainer>
  );
};
