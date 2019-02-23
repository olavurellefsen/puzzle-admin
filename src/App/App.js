import React from "react";
import {
  MenuContainer,
  MenuTop,
  MenuLogo,
  MenuTitle,
  LoginButton,
  LoginButtonText,
} from "./App.style";

export default props => {
  const { isAuthenticated } = props.auth;
  return (
    <MenuContainer>
      <MenuTop>
        <MenuLogo src="images/logo.png" />
        <MenuTitle>
          Puzzle Admin System
        </MenuTitle>
        <>
          {!isAuthenticated() && (
            <LoginButton onClick={() => props.auth.login()}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
          )}
          {isAuthenticated() && (
            <LoginButton onClick={() => props.auth.logout()}>
              <LoginButtonText>Logout</LoginButtonText>
            </LoginButton>
          )}
        </>
      </MenuTop>
    </MenuContainer>
  );
}
