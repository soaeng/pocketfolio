import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';
import qs from 'qs';

// 오브젝트 리스트 조회
export const getItemList = createAsyncThunk(
  'getItemList',
  async (params, {rejectWithValue}) => {
    try {
      http.paramsSerializer = param => {
        return qs.stringify(param);
      };

      const res = await http.get('items', {params});
      if (res.status === 200) return res.data;
    } catch (error) {
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
      if (res.status === 200) return res.data;
    } catch (error) {
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

export default itemSlice.reducer;
