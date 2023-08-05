import {TransactionItemStyled} from './TransactionItem.styled'

export const TransactionItem = ({ transaction }) => {
  return (
    <tbody>
      {transaction.map(item => (
        <tr key={item.id}>
          <TransactionItemStyled>{item.type}</TransactionItemStyled>
          <TransactionItemStyled>{item.amount}</TransactionItemStyled>
          <TransactionItemStyled>{item.currency}</TransactionItemStyled>
        </tr>
      ))}
    </tbody>
  );
};
