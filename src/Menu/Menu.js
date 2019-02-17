import React, { useContext } from "react";
import MainContext from "../Context";
import {
  MenuContainer,
  MenuTop,
  MenuLogo,
  MenuTitle,
  MenuUserArea
} from "./Menu.style";

export default function Menu() {
  const [state] = useContext(MainContext);
  return (
    <MenuContainer>
      <MenuTop>
        <MenuLogo src="images/logo.png" />
        <MenuTitle>
          Puzzle
          <br />
          Admin
          <br />
          System
          <br />
        </MenuTitle>
      </MenuTop>
      <MenuUserArea>{state.userName}</MenuUserArea>
    </MenuContainer>
  );
}
