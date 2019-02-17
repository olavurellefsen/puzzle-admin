import styled from "styled-components";

export const SceneContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  opacity: ${props => (props.selected ? 1 : 0.3)};
`;
SceneContainer.displayName = "SceneContainer";

export const SceneTitleForm = styled.form`
  height: 25px;
  background-color: rgb(178,253,138);
  padding: 10px;  
`;
SceneTitleForm.displayName = "SceneTitleForm";

export const SceneTitle = styled.input`
  color: black;
  font-size: 18px;
  background-color: rgb(178,253,138);
  border: 0px;
`;
SceneTitle.displayName = "SceneTitle";

export const SceneImage = styled.img`
  width: 400px;
`;
SceneImage.displayName = "SceneImage";