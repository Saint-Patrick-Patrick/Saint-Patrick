import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../../../features/apiPetitions";


export default function History() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions?.transactions);
  
  useEffect(() => {
    getTransactions({
      type: 'global',
      state: dispatch
    });
  }, []);


  return (
    <div>
      <h1>History</h1>
      <ul>
        {transactions
        ? console.log('holaaaaaaa', transactions)
          // ? transactions.map((transaction) => (
          //     <li key={transaction.id}>
          //       {transaction.date} - {transaction.amount}
          //     </li>
          //   ))
          : console.log("hola no hay nada", transactions)}
      </ul>
    </div>
  );
}
