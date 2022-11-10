import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 오브젝트 리스트 조회
/**
 * category는 category 번호: 0이면 전체 / page는 페이지 번호
  {
    category: int,
    page: int
  }
 */
export const getItemList = createAsyncThunk(
  'getItemList',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get('items', data);
      if (res.status === 200) return res;
    } catch (error) {
      console.log('오브젝트 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 오브젝트 상세 조회
export const getItem = createAsyncThunk(
  'getItem',
  async (itemSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`items/${itemSeq}`);
      if (res.status === 200) return res;
    } catch (error) {
      console.log('오브젝트 상세 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 오브젝트 카테고리 리스트 조회
export const getItemCategory = createAsyncThunk(
  'getItemCategory',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`items/category`);
      if (res.status === 200) return res;
    } catch (error) {
      console.log('오브젝트 카테고리 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {

};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = itemSlice.actions;
export default itemSlice.reducer;
