import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

/** 로그인 */
export const login = createAsyncThunk(
  'LOGIN',
  async (social, {rejectWithValue}) => {
    try {
      // const res = await http.get(`oauth2/authorization/${social}`);
      // console.log(res);
      return;
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
