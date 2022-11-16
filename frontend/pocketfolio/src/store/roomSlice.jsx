import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 마이룸 목록 조회
export const getRoomList = createAsyncThunk(
  'getRoomList',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms`);

      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('마이룸 목록 조회에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 생성
/**
  {
    "room": {
      "name": "string",
      "theme": 0,
      "isMain": "string",
      "privacy": "string",
      "created": "2022-11-09T13:34:30.302Z",
      "updated": "2022-11-09T13:34:30.302Z"
    },
    "thumbnail": "string"
  }
 */
export const createRoom = createAsyncThunk(
  'createRoom',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.post(`rooms`, data);
      if (res.status === 201) return res;
    } catch (error) {
      console.log('마이룸 생성에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 조회
export const getRoomInfo = createAsyncThunk(
  'getRoomInfo',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms/${roomSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('마이룸조회에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 삭제
export const delRoom = createAsyncThunk(
  'delRoom',
  async (room_id, {rejectWithValue}) => {
    try {
      const res = await http.delete(`rooms/${room_id}`);

      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('마이룸삭제에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 수정
/**
  {  
    "room": {
      "name": "string",
      "theme": 0,
      "isMain": "string",
      "privacy": "string",
      "created": "2022-11-09T13:36:26.614Z",
      "updated": "2022-11-09T13:36:26.614Z"
    },
    "thumbnail": "string"
  }
 */
export const updateRoom = createAsyncThunk(
  'updateRoom',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.patch(`rooms/info/${data.roomSeq}`, data);

      if (res.status === 201) return res.data;
    } catch (error) {
      console.log('마이룸 수정 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 좋아요 순 목록 조회
export const getRoomBest = createAsyncThunk(
  'getRoomBest',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms/best`);

      if (res.status === 201) return res.data;
    } catch (error) {
      console.log('마이룸 좋아요 순 목록 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 좋아요 목록 조회
export const getRoomLike = createAsyncThunk(
  'getRoomLike',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms/like`);

      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('마이룸 좋아요 목록 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 좋아요
export const roomLike = createAsyncThunk(
  'roomLike',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.post(`rooms/like/${roomSeq}`);
      if (res.status === 201) return res.data;
    } catch (error) {
      console.log('마이룸 좋아요 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 마이룸 좋아요 취소
export const roomDislike = createAsyncThunk(
  'roomDislike',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.delete(`rooms/like/${roomSeq}`);
      console.log(res);
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('마이룸 좋아요 취소 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 최근 방문자 목록 조회
export const getVisitors = createAsyncThunk(
  'getVisitors',
  async (roomSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms/guests/${roomSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('최근 방문자 목록 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 배치 수정
export const updateArranges = createAsyncThunk(
  'updateArranges',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.patch(`rooms/${data.roomSeq}`, data.body);

      if (res.status === 201) return true;
    } catch (error) {
      console.log('배치 수정 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 룸 카테고리 조회
export const getRoomCategory = createAsyncThunk(
  'getRoomCategory',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get('rooms/category');
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('룸 카테고리 불러오기 실패', error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = roomSlice.actions;
export default roomSlice.reducer;
