import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.color === true ? 'green' : 'red')};
`;
