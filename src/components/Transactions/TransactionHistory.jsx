import { TransactionItem } from './TransactionItem';
import transaction from './transactions';

export const TransactionHistory = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <TransactionItem transaction={transaction} />
      </table>
    </div>
  );
};
