import React, { useState, useContext, useRef } from "react";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import MainContext from "../../Context";
import { SceneContainer, SceneTitleForm, SceneTitle, SceneRightArrow } from "./Scene.style";

export default function Scene(props) {
  const [state, dispatch] = useContext(MainContext);
  let { id, title, image_filename } = props.scene;
  title = capitalizeFirstLetter(title);
  const [titleField, setTitleField] = useState(title);
  const sceneTitle = useRef(null);

  //If the parent component is updated (someone else has changed the value), then update the field here
  if(title!==titleField && title!==null) {
    setTitleField(title);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    sceneTitle.current.blur();
  };
  
  const selected = state.currentScene === id;
  return (
    <SceneContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: "setCurrentScene", number: id });
      }}
      backgroundImage={"images/scenes/" + image_filename}
    >
      <SceneTitleForm onSubmit={handleFormSubmit}>
        <SceneTitle
          ref={sceneTitle}
          name="title"
          type="text"
          value={titleField}
          onChange={e => setTitleField(e.target.value)}
        />
      </SceneTitleForm>
      <SceneRightArrow selected={selected}>></SceneRightArrow>
    </SceneContainer>
  );
}
