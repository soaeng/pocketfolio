import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 포트폴리오 목록 조회
export const getMyPort = createAsyncThunk(
  'getMyPort',
  async (uid, {rejectWithValue}) => {
    try {
      const res = await http.get(`portfolios`);
      if (res.status === 200) return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

// 포트폴리오 상세조회
export const getportDetail = createAsyncThunk(
  'getportDetail',
  async (portSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`portfolios/${portSeq}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

// 포트폴리오 생성
export const registPortfolio = createAsyncThunk(
  'registPortfolio',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.post('portfolios', data);
      return res
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

// 포트폴리오 수정
export const modifiedPort = createAsyncThunk(
  'modifiedPort',
  async (data , {rejectWithValue}) => {
    try {
      const res = await postAxios.patch(`portfolios/${data.port_id}`, data.form);
      return res
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

// 포트폴리오 삭제
export const deletePort = createAsyncThunk(
  'deletePort',
  async (portSeq, {rejectWithValue}) => {
    try {
      const res = await http.delete(`portfolios/${portSeq}`)
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)

// 내 포켓, 마이룸 조회
export const getMyPocket = createAsyncThunk(
  'getMyPocket',
  async (data, {rejectWithValue}) => {

    try {
      const res = await http.get('rooms/my')
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }

  }
)

// 포트폴리오 이미지 업로드
export const uploadImage = createAsyncThunk(
  'updateImage',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.post('portfolios/images', data)
      
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)


const initialState = {};

const portSlice = createSlice({
  name: 'port',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = portSlice.actions;
export default portSlice.reducer;
