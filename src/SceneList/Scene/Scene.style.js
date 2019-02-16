import styled from "styled-components";

export const SceneContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;
SceneContainer.displayName = "SceneContainer";

export const SceneImage = styled.img`
  width: 400px;
  opacity: ${props => (props.selected ? 1 : 0.3)};
`;
SceneImage.displayName = "SceneImage";

export const SceneImageText = styled.div`
  position: absolute;
  top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px gray;
  left: 50%;
  transform: translate(-50%, -50%);
`;
SceneImageText.displayName = "SceneImageText";
