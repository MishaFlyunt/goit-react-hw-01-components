import styled from 'styled-components';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const StatisticsStyled = styled.div`
  border: 2px solid ${props => getRandomColor(props.index)};
  margin: 15px 0;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const StatisticsListStyled = styled.ul`
  display: flex;
  gap: 12px;
`;

export const StatisticsItemsStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background-color: ${props => getRandomColor(props.index)};
`;
