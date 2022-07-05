import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", email: "", age: 0 } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", email: "", age: 0 };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
