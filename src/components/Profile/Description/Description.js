import { ProfileBlock, UserName, Location } from './Description.styled';

export const Description = ({ user: { avatar, username, tag, location } }) => {
  return (
    <ProfileBlock>
      <img src={avatar} alt={username} width="150px" />
      <UserName>{username}</UserName>
      <p>@{tag}</p>
      <Location>{location}</Location>
    </ProfileBlock>
  );
};
