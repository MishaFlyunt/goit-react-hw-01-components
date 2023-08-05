import {
  FriendListStyled,
  FriendItemStyled,
  Circle,
} from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(item => (
        <FriendItemStyled key={item.id}>
          <Circle color={item.isOnline}></Circle>
          <img src={item.avatar} alt={item.name} width="48" />
          <p>{item.name}</p>
        </FriendItemStyled>
      ))}
    </FriendListStyled>
  );
};
