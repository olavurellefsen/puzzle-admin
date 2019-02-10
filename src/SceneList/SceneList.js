import React from "react";
import Scene from './Scene/Scene';
import { SceneListContainer } from "./SceneList.style";

const SceneList = () => {
  const scenes = [0,1,2,3];
  return (
    <SceneListContainer>
      {scenes.map((scene, index) => 
        <Scene key={index} sceneId={scene}/>
      )}
    </SceneListContainer>
  );
};
export default SceneList;
