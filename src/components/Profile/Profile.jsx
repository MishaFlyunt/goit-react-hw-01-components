import { Description } from './Description';
import { Stats } from './Stats';
import user from './user';

export const Profile = () => {
  return (
    <div>
      <Description user={user} />
      <Stats user={user} />
    </div>
  );
};
