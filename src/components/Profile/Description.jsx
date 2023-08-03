export const Description = ({ user: { avatar, username, tag, location } }) => {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};
