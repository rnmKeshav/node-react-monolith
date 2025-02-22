import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import getGithubUser from "../actions/getGithubUser";

const SLICE_NAME = "github";

export const fetchData = createAsyncThunk(`${SLICE_NAME}/fetchData`, getGithubUser);

const githubSlice = createSlice({
  name: SLICE_NAME,
  initialState: {data: {}, isLoading: false, hasFailed: false},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // We can mutate the state inside redux toolkit createSlice. 
        // Redux handles the immutability internally. 
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.hasFailed = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state.data, action.payload);
      })
  }
})

export default githubSlice.reducer;
