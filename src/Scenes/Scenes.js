import React from "react";
import SceneList from '../SceneList/SceneList';
import PuzzleList from "../PuzzleList/PuzzleList";
import PuzzleItems from '../PuzzleItems/PuzzleItems';
import { ScenesContainer } from "./Scenes.style";

export default () => {
  return (
    <ScenesContainer>
      <SceneList />
      <PuzzleList />
      <PuzzleItems />
    </ScenesContainer>
  );
};

