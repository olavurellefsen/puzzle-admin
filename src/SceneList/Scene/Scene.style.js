import styled from "styled-components";

export const SceneContainer = styled.div`
  height: 300px;
  width: 400px;
  margin: 20px 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.4 : 0.2)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
  }
  opacity: ${props => (props.selected ? 1 : 0.5)};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`;
SceneContainer.displayName = "SceneContainer";

export const SceneTitleForm = styled.form`
  height: 25px;
  padding: 10px;
`;
SceneTitleForm.displayName = "SceneTitleForm";

export const SceneTitle = styled.input`
  display: block;
  margin : 0 auto;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  text-align: center;
`;
SceneTitle.displayName = "SceneTitle";

export const SceneRightArrow = styled.div`
  font-size: 60px;
  color: gray;
  text-align: right;
  transform: translate(40px,60px);
  visibility: ${props => (props.selected ? 'visible' : 'hidden')}
`;
SceneRightArrow.displayName = "SceneRightArrow";
