import React from "react";
import AudioItemList from "../AudioItemList/AudioItemList";
import { HomeContainer } from "./Home.style";

export default props => {
  const { isAuthenticated } = props.auth;
  return (
    <HomeContainer>
      {isAuthenticated() && (
        <div data-testid="AudioItemList">
          <AudioItemList />
        </div>
      )}
    </HomeContainer>
  );
}
