import React, { useReducer } from "react";
import MainContext from "./Context";
import createReducer from "./createReducer";

export default (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {props.children}
    </MainContext.Provider>
  );
}

const initialState = {
  currentPuzzleitem: 1,
};

const reducer = createReducer(initialState, {
  reset: () => initialState,
  setCurrentPuzzleitem: (state, action) => ({
    ...state,
    currentPuzzleitem: action.number
  }),
});
