import React, { useContext } from "react";
import MainContext from "../../Context";
import { SceneContainer, SceneImage } from "./Scene.style";

export default function Scene(props) {
  const value = useContext(MainContext);
  return (
    <SceneContainer>
      <SceneImage
        src={
          value.currentScene === props.sceneId
            ? "https://via.placeholder.com/300/000000/FFFFFF/?text=selected"
            : "https://via.placeholder.com/300?text=Scene"
        }
        onClick={() => {}}
      />
    </SceneContainer>
  );
}
