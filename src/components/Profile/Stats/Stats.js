import { StatsList, StatsItem } from './Stats.styled';

export const Stats = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
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
  );
};
