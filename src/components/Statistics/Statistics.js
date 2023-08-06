import {
  StatisticsStyled,
  Title,
  StatisticsListStyled,
  StatisticsItemsStyled,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsStyled>
      {title && <Title>{title}</Title>}
      <StatisticsListStyled>
        {data.map(item => (
          <StatisticsItemsStyled key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatisticsItemsStyled>
        ))}
      </StatisticsListStyled>
    </StatisticsStyled>
  );
};
