import React from "react";
import {
  PuzzleItemPropertiesContainer,
  PuzzleItemPropertiesImage
} from "./PuzzleItemProperties.style";

export default () => (
  <PuzzleItemPropertiesContainer data-testid="PuzzleItemPropertiesContainer">
    <PuzzleItemPropertiesImage
      src={"https://via.placeholder.com/640x200?text=PuzzleItemProperties"}
      data-testid="PuzzleItemPropertiesImage"
    />
  </PuzzleItemPropertiesContainer>
);
