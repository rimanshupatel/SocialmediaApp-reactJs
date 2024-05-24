import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
