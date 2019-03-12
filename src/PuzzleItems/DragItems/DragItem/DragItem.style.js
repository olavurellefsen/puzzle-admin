import styled from "styled-components";

export const DragItemContainer = styled.div`
  height: 180px;
  width: 240px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.9 : 0.7)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
  }
  opacity: ${props => (props.selected ? 1 : 0.8)};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`;

export const DragItemForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

export const DragItemFieldCaption = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: gray;
`;

export const DragItemInputField = styled.input`
  font-size: 14px;
  padding: 0px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
`;