import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo");

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: userInfo ? JSON.parse(userInfo) : null,
  },

  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },

    clearUser: (state, action) => {
      state.value = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
