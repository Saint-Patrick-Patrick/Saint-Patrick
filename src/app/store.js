import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import transactionsSlice from '../features/transactionsSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    transactions: transactionsSlice
  },
});
