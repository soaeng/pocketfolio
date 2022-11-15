import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

// 마이룸 목록 조회
export const getSearch = createAsyncThunk(
  'getSearch',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`search/${data.searchMode}`, data.params);

      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('검색 조회에러', error);
      return rejectWithValue(error);
    }
  },
);
