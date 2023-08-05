export const TransactionItem = ({ transaction }) => {
  return (
    <tbody>
      {transaction.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};