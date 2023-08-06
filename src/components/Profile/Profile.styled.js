import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: rgb(173, 199, 160);
  padding: 10px;
  border: 2px solid rgb(122, 344, 321);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const ProfileBlock = styled.div`
  border: 3px solid black;
  padding: 40px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.div`
  color: tomato;
`;

export const Location = styled.div`
  color: #4d5ae5;
`;


