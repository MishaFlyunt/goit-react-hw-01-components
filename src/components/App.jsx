import { FriendList } from './Friends/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
