import {
  StatisticsItemsStyled,
  StatisticsListStyled,
} from './StatisticsItems.styled';

export const StatisticsItems = ({ stats }) => {
  return (
    <StatisticsListStyled>
      {stats.map(item => (
        <StatisticsItemsStyled key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </StatisticsItemsStyled>
      ))}
    </StatisticsListStyled>
  );
};
