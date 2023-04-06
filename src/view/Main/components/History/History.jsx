import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../../../features/apiPetitions";
import io from 'socket.io-client';
import { updateTransactions } from "../../../../features/transactionsSlice";

const socket = io('http://localhost:5000');
//const userId = '1'
socket.on('connect', () => {
  console.log(`Connected with id ${socket.id}`);
//  socket.emit('join', { userId });

});

export default function History() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions?.transactions);
  //const [transactions, setTransactions] = useState([])
  useEffect(() => {
    getTransactions({
      type: 'global',
      state: dispatch
    });
  }, []);

  useEffect(() => {

    // Escuchar el evento "transaction" y despachar la acción de Redux
    socket.on('transaction', (transaction) => {
      dispatch(updateTransactions(transaction));
    });

    return () => {
      socket.disconnect(); // Desconectar el socket cuando el componente se desmonte
    };
  }, [dispatch]);

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
