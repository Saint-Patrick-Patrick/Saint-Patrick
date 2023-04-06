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
  },
});
export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
