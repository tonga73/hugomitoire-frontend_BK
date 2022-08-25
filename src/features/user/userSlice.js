import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCreateUser } from "./userAPI";

const initialState = {
  status: "",
  message: "",
  user: {},
};

export const createUser = createAsyncThunk(
  "user/fetchCreateUser",
  async (user, { rejectWithValue }) => {
    const response = await fetchCreateUser(user);

    console.log(response);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      });
  },
});

export const { setUsers } = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
