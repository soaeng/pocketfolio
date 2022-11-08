import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';

export const registPortfolio = createAsyncThunk(
  'createPort',
  async (data, {rejectWithValue}) => {
    console.log('슬라이스: ',data)
    try {
      
      // const res = await http.post('portfolios');
      // console.log('포트폴리오 등록 성공', res)
      
    } catch(err) {
      console.log('포트폴리오 등록 실패', err);
      return rejectWithValue(err.response);
    }
  }
)