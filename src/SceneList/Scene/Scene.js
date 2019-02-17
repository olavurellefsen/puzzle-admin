import React, { useState, useContext, useRef } from "react";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import MainContext from "../../Context";
import { SceneContainer, SceneImage, SceneTitleForm, SceneTitle } from "./Scene.style";

export default function Scene(props) {
  const [state, dispatch] = useContext(MainContext);
  const [title, setTitle] = useState(capitalizeFirstLetter(props.scene.title));
  const sceneTitle = useRef(null);

  const handleFormSubmit = e => {
    e.preventDefault();
    sceneTitle.current.blur();
  };
  const selected = state.currentScene === props.scene.id;
  return (
    <SceneContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: "setCurrentScene", number: props.scene.id });
      }}
    >
      <SceneTitleForm onSubmit={handleFormSubmit}>
        <SceneTitle
          ref={sceneTitle}
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </SceneTitleForm>
      <SceneImage src={"images/scenes/" + props.scene.image_filename} />
    </SceneContainer>
  );
}
