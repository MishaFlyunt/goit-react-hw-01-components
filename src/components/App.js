import { FriendList } from './Friends/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { GlobalStyle, Container } from './GlobalStyle';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transitions from '../Data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transitions={transitions} />

      <GlobalStyle />
    </Container>
  );
};
