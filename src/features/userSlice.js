import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state = payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
