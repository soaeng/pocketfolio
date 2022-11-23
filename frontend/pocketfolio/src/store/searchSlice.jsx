import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';
import qs from 'qs';

// 마이룸 목록 조회
export const getSearch = createAsyncThunk(
  'getSearch',
  async (params, {rejectWithValue}) => {
    try {
      http.paramsSerializer = param => {
        return qs.stringify(param);
      };
      const res = await http.get(`search/${params.searchMode}`, params);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
