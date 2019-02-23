import React, { useState, useContext, useRef } from "react";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import MainContext from "../../Context";
import {
  SceneContainer,
  SceneTitleForm,
  SceneTitle,
  SceneRightArrow
} from "./Scene.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default (props) => {
  const [state, dispatch] = useContext(MainContext);
  let { id, title, image_filename } = props.scene;
  title = capitalizeFirstLetter(title);
  const [titleField, setTitleField] = useState(title);
  const sceneTitle = useRef(null);

  //If the parent component is updated (someone else has changed the value), then update the field here
  if (title !== titleField && title !== null && sceneTitle.current !== null) {
    if (sceneTitle.current.defaultValue === titleField) {
      setTitleField(title);
    }
  }

  const UPDATE_SCENE = gql`
    mutation update_scene($id: Int!, $title: String!) {
      update_scene(where: { id: { _eq: $id } }, _set: { title: $title }) {
        affected_rows
      }
    }
  `;

  const selected = state.currentScene === id;
  return (
    <SceneContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: "setCurrentScene", number: id });
      }}
      backgroundImage={"images/scenes/" + image_filename}
    >
      <Mutation mutation={UPDATE_SCENE}>
        {(updateSceneTitle, { data }) => (
          <SceneTitleForm
            onSubmit={e => {
              e.preventDefault();
              updateSceneTitle({ variables: { id: id, title: titleField } });
              sceneTitle.current.blur();
            }}
          >
            <SceneTitle
              ref={sceneTitle}
              name="title"
              type="text"
              value={titleField}
              onChange={e => setTitleField(e.target.value)}
            />
          </SceneTitleForm>
        )}
      </Mutation>
      <SceneRightArrow selected={selected}>></SceneRightArrow>
    </SceneContainer>
  );
}
