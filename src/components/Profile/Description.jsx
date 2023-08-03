export const Description = ({ user: { avatar, username, tag, location } }) => {
  return (
    <div>
      <img src={avatar} alt={username} width='150px' />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};
