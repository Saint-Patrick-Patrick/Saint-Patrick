import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../features/transactionsSlice";
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    transactions:transactionsSlice
  },
});
