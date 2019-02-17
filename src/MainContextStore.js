import React, { useReducer } from "react";
import MainContext from "./Context";
import createReducer from "./createReducer";

export default function MainContextStore(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {props.children}
    </MainContext.Provider>
  );
}

const initialState = {
  currentScene: 1,
  currentPuzzle: 2,
  userName: 'not logged in'
};

const reducer = createReducer(initialState, {
  reset: () => initialState,
  setCurrentScene: (state, action) => ({
    ...state,
    currentScene: action.number
  }),
  setCurrentPuzzle: (state, action) => ({
    ...state,
    currentPuzzle: action.number
  })
});
