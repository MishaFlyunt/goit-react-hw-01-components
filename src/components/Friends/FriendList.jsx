import friends  from './friends';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <div>
      <FriendListItem friends={friends} />
    </div>
  );
};
