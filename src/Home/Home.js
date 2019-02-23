import React from "react";
import Scenes from "../Scenes/Scenes";

export default props => {
  const { isAuthenticated } = props.auth;
  return (
    <>
      {isAuthenticated() && (
        <div data-testid="Scenes">
          <Scenes />
        </div>
      )}
    </>
  );
}
