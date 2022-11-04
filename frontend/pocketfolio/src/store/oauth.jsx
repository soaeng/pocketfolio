import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../api/axios';

/** 로그인 */
export const login = createAsyncThunk(
  'LOGIN',
  async (args, {rejectWithValue}) => {
    try {
      const res = await http.post('oauth2/authorization/google', userData);
      // const accessToken = res.data.accessToken;
      // const refreshToken = res.data.refreshToken;
      // window.localStorage.setItem('access-Token', accessToken);
      // window.localStorage.setItem('refresh-Token', refreshToken);
      // return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

const initialState = {};

const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = oauthSlice.actions;
export default oauthSlice.reducer;
