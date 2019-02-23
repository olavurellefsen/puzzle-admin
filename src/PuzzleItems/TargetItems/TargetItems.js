import React from "react";
import { TargetItemsContainer, TargetItemsImage } from "./TargetItems.style";

export default () => (
  <TargetItemsContainer data-testid="TargetItemsContainer">
    {" "}
    <TargetItemsImage
      src={"https://via.placeholder.com/200x800?text=Target"}
      data-testid="TargetItemsImage"
    />
  </TargetItemsContainer>
);
