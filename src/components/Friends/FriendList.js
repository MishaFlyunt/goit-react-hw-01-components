import friends from './friends.json';
import { FriendListItem } from './FriendItem/FriendListItem';

export const FriendList = () => {
  return (
    <div>
      <FriendListItem friends={friends} />
    </div>
  );
};
