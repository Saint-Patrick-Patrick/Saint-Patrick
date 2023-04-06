import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions:null
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, { payload }) {
      state.transactions = payload;
      //console.log(state);
    },
    updateTransactions(state, { payload }) {
      // Concatena la nueva transacción al arreglo existente de transacciones
      state.transactions = [...state.transactions, payload];
    }
  },
});
export const { setTransactions, updateTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
