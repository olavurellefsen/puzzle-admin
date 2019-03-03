import React from "react";
import Scenes from "../Scenes/Scenes";
import { HomeContainer } from "./Home.style";

export default props => {
  const { isAuthenticated } = props.auth;
  return (
    <HomeContainer>
      {isAuthenticated() && (
        <div data-testid="Scenes">
          <Scenes />
        </div>
      )}
    </HomeContainer>
  );
}
