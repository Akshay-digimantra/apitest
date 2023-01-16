import { createSlice } from "@reduxjs/toolkit";

const initialState = { Users: [] };

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action) {
      console.log(action.payload);

      state.Users = action.payload;
    },
  },
});

export const userSliceActions = UserSlice.actions;
