import React from "react";
import MainContext from "./Context";

export default function MainContextStore(props) {
  return (
    <MainContext.Provider value={{currentScene: 1, currentPuzzle: 2}}>{props.children}</MainContext.Provider>
  );
}
