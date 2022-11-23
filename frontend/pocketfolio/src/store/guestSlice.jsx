import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

/** 방명록 */

// 방명록 목록 조회
export const getGuestList = createAsyncThunk(
  'getGuestList',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`guests/${roomSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 방명록 작성
export const postGuest = createAsyncThunk(
  'postGuest',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.post(`guests/${data.roomSeq}`, data.data);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 방명록 삭제
export const delGuest = createAsyncThunk(
  'delGuest',
  async (bookSeq, {rejectWithValue}) => {
    try {
      const res = await http.delete(`guests/${bookSeq}`);
      if (res.status === 200) return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 방명록 댓글 등록
export const postComment = createAsyncThunk(
  'postComment',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.post(
        `guests/comment/${data.roomSeq}/${data.guestbookSeq}`,
        {
          content: data.content,
          isPublic: data.isPublic,
        },
      );
      
      if (res.status === 201) return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 방명록 댓글 삭제
export const delComment = createAsyncThunk(
  'delComment',
  async (commentSeq, {rejectWithValue}) => {
    try {
      const res = await http.delete(`guests/comment/${commentSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/** 파도타기 */
export const getRandom = createAsyncThunk(
  'getRandom',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms/random/${roomSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
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
