import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

/** 방명록 */

// 방명록 목록 조회
export const getGuestList = createAsyncThunk(
  'getGuestList',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`guests/${roomSeq}`);
      console.log(res)
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('방명록 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = guestSlice.actions;
export default guestSlice.reducer;
