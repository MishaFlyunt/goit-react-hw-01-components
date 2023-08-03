export const StatisticsItems = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
