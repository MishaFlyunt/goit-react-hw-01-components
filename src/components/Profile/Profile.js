import {
  ProfileBlock,
  UserName,
  Location,
  StatsList,
  StatsItem,
} from './Profile.styled.js';

export const Profile = ({
  user: {
    avatar,
    username,
    location,
    tag,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div>
      <ProfileBlock>
        <img src={avatar} alt={username} width="150px" />
        <b>
          <UserName>{username}</UserName>
        </b>
        <p>@{tag}</p>
        <Location>{location}</Location>
      </ProfileBlock>
      <StatsList>
        <StatsItem>
          <b>
            <span>Followers</span>
          </b>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <b>
            <span>Views</span>
          </b>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <b>
            <span>Likes</span>
          </b>
          <span>{likes}</span>
        </StatsItem>
      </StatsList>
    </div>
  );
};
