import React, { useContext } from "react";
import MainContext from "../../Context";
import { SceneContainer, SceneImage, SceneImageText } from "./Scene.style";

export default function Scene(props) {
  const [state, dispatch] = useContext(MainContext);
  return (
    <SceneContainer>
      <SceneImage
        src={"images/scenes/" + props.scene.image_filename}
        onClick={() => {dispatch({type: 'setCurrentScene', number: props.scene.id})}}
        selected={state.currentScene === props.scene.id}
      />
      <SceneImageText>{props.scene.title}</SceneImageText>
    </SceneContainer>
  );
}
