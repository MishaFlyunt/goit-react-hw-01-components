import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import user from './user';

export const Profile = () => {
  return (
    <div>
      <Description user={user} />
      <Stats user={user} />
    </div>
  );
};
