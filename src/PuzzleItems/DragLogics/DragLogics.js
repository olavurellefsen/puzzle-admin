import React from "react";
import { DragLogicsContainer, DragLogicsImage } from "./DragLogics.style";

export default () => (
  <DragLogicsContainer data-testid="DragLogicsContainer">
    <DragLogicsImage
      src={"https://via.placeholder.com/200x800?text=Logic"}
      data-testid="DragLogicsImage"
    />
  </DragLogicsContainer>
);
