import React from "react";
import { PuzzleItemsContainer } from "./PuzzleItems.style";
import DragItems from "./DragItems/DragItems";
import DragLogics from "./DragLogics/DragLogics";
import TargetItems from "./TargetItems/TargetItems";
import PuzzleItemProperties from "./PuzzleItemProperties/PuzzleItemProperties";

export default () => (
  <PuzzleItemsContainer data-testid="PuzzleItemsContainer" >
    <DragItems />
    <DragLogics />
    <TargetItems />
    <PuzzleItemProperties />
  </PuzzleItemsContainer>
);
