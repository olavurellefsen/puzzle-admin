import React, { useContext } from "react";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import MainContext from "../../Context";
import { SceneContainer, SceneImage, SceneImageText } from "./Scene.style";

export default function Scene(props) {
  const [state, dispatch] = useContext(MainContext);
  const selected = state.currentScene === props.scene.id;
  return (
    <SceneContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: "setCurrentScene", number: props.scene.id });
      }}
    >
      <SceneImageText>
        {capitalizeFirstLetter(props.scene.title)}
      </SceneImageText>
      <SceneImage src={"images/scenes/" + props.scene.image_filename} />
    </SceneContainer>
  );
}
