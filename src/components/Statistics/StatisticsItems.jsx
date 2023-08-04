export const StatisticsItems = ({ stats }) => {
  return (
    <ul>
      {stats.map(item => (
        <li key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
