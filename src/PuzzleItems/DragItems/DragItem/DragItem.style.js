import styled from 'styled-components';

export const DragItemContainer = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.9 : 0.7)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
  }
  opacity: ${props => (props.selected ? 1 : 0.8)};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`;

export const DragItemImage = styled.img`
  height:80px;
  max-width:80px;
  margin: 10px;
`;