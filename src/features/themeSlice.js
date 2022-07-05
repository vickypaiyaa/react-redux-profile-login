import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "user",
  initialState: { value: { color: "black" } },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
