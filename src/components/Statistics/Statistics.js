import data from './data';
import { StatisticsItems } from './StatisticsItem/StatisticsItems';
import { StatisticsStyled, Title } from './Statistics.styled';

export const Statistics = () => {
  return (
    <StatisticsStyled>
      <Title >Upload stats</Title>
      <StatisticsItems stats={data} />
    </StatisticsStyled>
  );
};
