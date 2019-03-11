import styled from "styled-components";

export const SceneContainer = styled.div`
  height: 180px;
  width: 240px;
  margin: 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.4 : 0.2)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
  }
  opacity: ${props => (props.selected ? 1 : 0.5)};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`;

export const SceneTitleForm = styled.form`
  height: 25px;
  padding: 5px 0px;
`;

export const SceneTitle = styled.input`
  display: block;
  margin : 0 auto;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  text-align: center;
`;

export const SceneRightArrow = styled.div`
  font-size: 60px;
  color: gray;
  text-align: right;
  transform: translate(40px,-15px);
  visibility: ${props => (props.selected ? 'visible' : 'hidden')}
`;