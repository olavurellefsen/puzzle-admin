import React from "react";
import Scene from './Scene/Scene';
import { SceneListContainer } from "./SceneList.style";

const SceneList = () => {
  return (
    <SceneListContainer>
      <Scene sceneId={0}/>
      <Scene sceneId={1}/>
      <Scene sceneId={2}/>
      <Scene sceneId={3}/>
    </SceneListContainer>
  );
};
export default SceneList;
