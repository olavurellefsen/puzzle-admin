import React from "react";
import { DragItemsContainer, DragItemsImage } from "./DragItems.style";

export default () => (
  <DragItemsContainer data-testid="DragItemsContainer">
    <DragItemsImage src={"https://via.placeholder.com/400x800?text=DragItems"} data-testid="DragItemsImage" />
  </DragItemsContainer>
);