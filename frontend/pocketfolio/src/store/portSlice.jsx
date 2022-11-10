import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 포트폴리오 목록 조회
export const getMyPort = createAsyncThunk(
  'getMyPort',
  async (uid, {rejectWithValue}) => {
    try {
      const res = await http.get(`portfolios`)
      if (res.status === 200) return res;
    } catch (err) {
      console.log('포트폴리오 목록 조회 실패')
      return rejectWithValue(err.response)
    }
  }
)

// 포트폴리오 상세조회
export const getportDetail = createAsyncThunk(
  'getportDetail',
  async (portSeq, {rejectWithValue}) => {
    
    try {
      const res = await http.get(`portfolios/${portSeq}`)
      return res.data
    } catch (err) {
      console.log('포트폴리오 상세 조회 실패')
      return rejectWithValue(err.response)
    }
  }

)

// 포트폴리오 생성
export const registPortfolio = createAsyncThunk(
  'registPortfolio',
  async (data, {rejectWithValue}) => {
    console.log('슬라이스: ', data);

    try {
      const res = await postAxios.post('portfolios', data);
      console.log('포트폴리오 등록 성공')
    } catch (err) {
      console.log('포트폴리오 등록 실패', err);
      return rejectWithValue(err.response);
    }
  },
);

const initialState = {};

const portSlice = createSlice({
  name: 'port',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = portSlice.actions;
export default portSlice.reducer;
