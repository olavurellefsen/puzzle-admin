import React from "react";
import { DragItemsContainer, DragItemsImage } from "./DragItems.style";

export default () => (
  <DragItemsContainer data-testid="DragItemsContainer">
    <DragItemsImage src={"https://via.placeholder.com/200x800?text=Drag"} data-testid="DragItemsImage" />
  </DragItemsContainer>
);