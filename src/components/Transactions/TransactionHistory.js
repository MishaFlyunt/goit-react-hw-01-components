import {
  TransactionStyled,
  TransactionItemStyled,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transitions }) => {
  return (
    <table>
      <thead>
        <tr>
          <TransactionStyled>Type</TransactionStyled>
          <TransactionStyled>Amount</TransactionStyled>
          <TransactionStyled>Currency</TransactionStyled>
        </tr>
      </thead>
      <tbody>
        {transitions.map(item => (
          <tr key={item.id}>
            <TransactionItemStyled>{item.type}</TransactionItemStyled>
            <TransactionItemStyled>{item.amount}</TransactionItemStyled>
            <TransactionItemStyled>{item.currency}</TransactionItemStyled>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
