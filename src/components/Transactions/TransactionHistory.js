import { TransactionItem } from './TransactionItem/TransactionItem';
import transaction from './transactions';
import { TransactionStyled } from './TransactionHistory.styled';

export const TransactionHistory = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <TransactionStyled>Type</TransactionStyled>
            <TransactionStyled>Amount</TransactionStyled>
            <TransactionStyled>Currency</TransactionStyled>
          </tr>
        </thead>
        <TransactionItem transaction={transaction} />
      </table>
    </div>
  );
};
