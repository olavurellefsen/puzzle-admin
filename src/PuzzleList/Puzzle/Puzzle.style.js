import styled from "styled-components";

export const PuzzleContainer = styled.div`
  height: 200px;
  width: 240px;
  padding: 10px;
  margin: 20px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.4 : 0.2)});
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
  }
  opacity: ${props => (props.selected ? 1 : 0.3)};
`;

export const PuzzleForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2px 16px;
`;

export const PuzzleFieldCaption = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: gray;
`;

export const PuzzleInputField = styled.input`
  font-size: 14px;
  padding: 0px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
`;

export const PuzzleTextAreaField = styled.textarea`
  font-size: 14px;
  padding: 0px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
`;

export const PuzzleRightArrow = styled.div`
  font-size: 60px;
  color: gray;
  text-align: right;
  transform: translate(50px,-100px);
  visibility: ${props => (props.selected ? 'visible' : 'hidden')}
`;