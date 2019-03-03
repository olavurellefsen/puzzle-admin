import React from "react";
import { PuzzleItemsContainer, PuzzleItemsBox } from "./PuzzleItems.style";
import DragItems from "./DragItems/DragItems";
import TargetItems from "./TargetItems/TargetItems";
import PuzzleItemProperties from "./PuzzleItemProperties/PuzzleItemProperties";

export default () => (
  <PuzzleItemsContainer data-testid="PuzzleItemsContainer">
    <PuzzleItemsBox data-testid="PuzzleItemsBox">
      <DragItems />
      <TargetItems />
    </PuzzleItemsBox>
    <PuzzleItemProperties />
  </PuzzleItemsContainer>
);
