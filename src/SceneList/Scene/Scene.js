import React, { useContext } from "react";
import MainContext from "../../Context";
import { SceneContainer, SceneImage, SceneImageText } from "./Scene.style";

export default function Scene(props) {
  const value = useContext(MainContext);
  return (
    <SceneContainer>
      <SceneImage
        src={"images/scenes/" + props.scene.image_filename}
        onClick={() => {}}
        selected={value.currentScene === props.scene.id}
      />
      <SceneImageText>{props.scene.title}</SceneImageText>
    </SceneContainer>
  );
}
