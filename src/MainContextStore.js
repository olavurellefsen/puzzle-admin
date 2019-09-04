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
  currentAudioItem: 1,
  currentScene: 1,
  currentPuzzles: [{ scene_id: 1, puzzle_id: 1 }],
};

const reducer = createReducer(initialState, {
  reset: () => initialState,
  setCurrentAudioItem: (state, action) => ({
    ...state,
    currentAudioItem: action.number
  }),
  setCurrentScene: (state, action) => ({
    ...state,
    currentScene: action.number
  }),
  setCurrentPuzzle: (state, action) => ({
    ...state,
    currentPuzzles: [
      ...state.currentPuzzles.filter(p => p.scene_id !== action.scene_id),
      { scene_id: action.scene_id, puzzle_id: action.puzzle_id }
    ]
  })
});
