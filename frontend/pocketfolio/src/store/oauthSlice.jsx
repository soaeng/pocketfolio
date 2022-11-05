import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

const initialState = {};

const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = oauthSlice.actions;
export default oauthSlice.reducer;
