export const FriendListItem = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <span>{item.isOnline}</span>
          <img src={item.avatar} alt={item.name} width="48" />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
