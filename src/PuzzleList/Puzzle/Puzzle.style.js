import styled from "styled-components";

export const PuzzleContainer = styled.div`
  padding: 10px;
  margin: 20px;
  width: 400px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.4 : 0.2)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
  }
  opacity: ${props => (props.selected ? 1 : 0.3)};
`;
PuzzleContainer.displayName = "PuzzleContainer";

export const PuzzleFields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 16px;
`;
PuzzleFields.displayName = "PuzzleFields";

export const PuzzleFieldCaption = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: gray;
`;
PuzzleFieldCaption.displayName = "PuzzleFieldCaption";

export const PuzzleField = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;
PuzzleField.displayName = "PuzzleField";
