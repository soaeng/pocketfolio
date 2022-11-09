import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 본인 정보 조회
export const getMyInfo = createAsyncThunk(
  'getMyInfo',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get('users/profile');

      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('유저정보에러', error);
      return rejectWithValue(error);
    }
  },
);

// 회원정보수정
export const updateProfile = createAsyncThunk(
  'updateProfile',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.patch('users', data);
      
      if (res.status === 201) return res;
    } catch (error) {
      console.log('회원정보수정 에러', error);
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
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.data;
      });
  },
});

export const {logout} = oauthSlice.actions;
export default oauthSlice.reducer;
