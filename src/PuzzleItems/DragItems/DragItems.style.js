import styled from 'styled-components';

export const DragItemsContainer = styled.div`
  min-width: 294px;
  overflow: hidden;
`;

export const DragItemsHeader = styled.div`
  text-align: left;
  padding-top: 10px;
  padding-left: 20px;
  font-size: 16px;
  color: #666666;
`;

export const DragItemsBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 14px;
`;

export const DragPlaceholder = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px 20px;
`;

export const AddDragItem = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px 20px;
  font-size: 32px;
  text-align: center;
  cursor: pointer;
`;