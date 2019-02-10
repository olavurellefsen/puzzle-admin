import React from "react";
import MainContext from "./Context";

export default function MainContextStore(props) {
  return (
    <MainContext.Provider value={{currentScene: 1}}>{props.children}</MainContext.Provider>
  );
}
