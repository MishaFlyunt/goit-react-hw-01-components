import { FriendList } from './Friends/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />

      <GlobalStyle/>
    </div>
  );
};
