import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "./adminAPI";

const initialState = {
  status: "",
  message: "",
  users: [],
};

export const getUsers = createAsyncThunk(
  "admin/fetchUsers",
  async (user, { rejectWithValue }) => {
    const response = await fetchUsers(user);

    return response;
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      });
  },
});

export const { setUsers } = adminSlice.actions;

export const selectUsers = (state) => state.admin.users;

export default adminSlice.reducer;
