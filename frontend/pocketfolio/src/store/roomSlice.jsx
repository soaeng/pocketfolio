import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';

// 메인페이지 데이터 조회
export const getMain = createAsyncThunk(
  'getMain',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`main`);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


// 마이룸 목록 조회
export const getRoomList = createAsyncThunk(
  'getRoomList',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`rooms`);

      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 마이룸 생성
export const createRoom = createAsyncThunk(
  'createRoom',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.post(`rooms`, data);
      if (res.status === 201) return res;
    } catch (error) {
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
      return rejectWithValue(error);
    }
  },
);

// 마이룸 수정
export const updateRoom = createAsyncThunk(
  'updateRoom',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.patch(
        `rooms/info/${data.roomSeq}`,
        data.data,
      );
      if (res.status === 201) return true;
    } catch (error) {
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
      if (res.status === 201) return true;
    } catch (error) {
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
      if (res.status === 200) return res.data;
    } catch (error) {
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
