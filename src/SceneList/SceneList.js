import React from "react";
import Scene from './Scene/Scene';
import { SceneListContainer } from "./SceneList.style";
import sceneData from './SceneData';

const SceneList = () => {
  const scenes = sceneData.data.scene;
  return (
    <SceneListContainer>
      {scenes.map((scene, index) => {
        return(<Scene key={index} scene={scene}/>)
      }
      )}
    </SceneListContainer>
  );
};
export default SceneList;
