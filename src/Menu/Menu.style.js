import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(89,231,255);
`;
MenuContainer.displayName = 'MenuContainer';

export const MenuTop = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: flex-start;
`;
export const MenuLogo  = styled.img`
  padding: 10px;
`;
MenuLogo.displayName = 'MenuLogo';

export const MenuTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const MenuUserArea  = styled.div`
  padding-bottom: 50px;
  text-align: center;
`;
MenuUserArea.displayName = 'MenuUserArea';