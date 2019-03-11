import styled from 'styled-components';

export const TargetItemContainer = styled.div`
  height: 180px;
  width: 240px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.9 : 0.7)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
  }
  opacity: ${props => (props.selected ? 1 : 0.8)};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`;

export const TargetItemTopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
`;

export const TargetItemImage = styled.img`
  height:80px;
  max-width:80px;
  margin-right: 10px;
`;

export const TargetItemBubbleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const TargetItemFieldCaption = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: gray;
`;

export const TargetItemField = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const TargetItemRestContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;