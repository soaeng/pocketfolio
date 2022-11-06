import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { http } from '../api/axios';

export const getMyInfo = createAsyncThunk(
  'getMyInfo',
  async (data ,{rejectWithValue}) => {
    try {
      const res = await http.get('/profile');
      console.log(res);
      return res;
    } catch (error) {
      console.log('유저정보에러', error)
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  user: null,
};

const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMyInfo, (state, action) => {
      console.log('getMyInfo', action.payload);
    });
  },
});

// export const {} = oauthSlice.actions;
export default oauthSlice.reducer;
