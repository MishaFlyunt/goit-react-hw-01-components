import { FriendList } from './Friends/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { GlobalStyle, Container } from './GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />

      <GlobalStyle />
    </Container>
  );
};
