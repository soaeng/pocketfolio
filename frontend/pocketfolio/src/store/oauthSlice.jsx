import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http, postAxios} from '../api/axios';
import {deleteAllToken, getToken} from '../api/jwt';

/** 유저 */
// 본인 정보 조회
export const getMyInfo = createAsyncThunk(
  'getMyInfo',
  async (data, {rejectWithValue}) => {
    try {
      if (getToken()) {
        const res = await http.get('users/profile');
        if (res.status === 200) return res.data;
      } else return null
    } catch (error) {
      console.log('유저정보에러', error);
      return rejectWithValue(error);
    }
  },
);

// 특정 유저정보 조회
export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`users/profile/${userSeq}`);
      if (res.status === 200) return res.data;
    } catch (error) {
      console.log('특정유저정보조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 회원정보수정
export const updateProfile = createAsyncThunk(
  'updateProfile',
  async (data, {rejectWithValue}) => {
    try {
      const res = await postAxios.patch('users', data);

      if (res.status === 201) return res;
    } catch (error) {
      console.log('회원정보수정 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 회원탈퇴
export const signOut = createAsyncThunk(
  'signOut',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.delete('users');
      if (res.status === 200) return true;
    } catch (error) {
      console.log('회원탈퇴에러', error);
      return rejectWithValue(error);
    }
  },
);

/** 팔로우 */
export const followFunc = createAsyncThunk(
  'follow',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.post(`follows/${userSeq}`);
      if (res.status === 201) return true;
    } catch (error) {
      console.log('팔로우 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 팔로우 취소 (유저번호) => swagger에 팔로우 번호로 취소 하는 api도 되어있음
export const unfollowFunc = createAsyncThunk(
  'unfollow',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.delete(`follows/user/${userSeq}`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('팔로우 취소 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 내 팔로워 리스트 조회
export const getMyFollower = createAsyncThunk(
  'getMyFollower',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`follows/follower`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('내 팔로워 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 내 팔로잉 리스트 조회
export const getMyFollowing = createAsyncThunk(
  'getMyFollowing',
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.get(`follows/following`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('내 팔로잉 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 특정유저의 팔로워 리스트 조회
export const getUserFollower = createAsyncThunk(
  'getUserFollower',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`follows/follower/${userSeq}`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('특정유저의 팔로워 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 특정 유저의 팔로잉 리스트 조회
export const getUserFollowing = createAsyncThunk(
  'getUserFollowing',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`follows/following/${userSeq}`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('특정 유저의 팔로잉 리스트 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

// 팔로우 번호 조회
export const getFollowNum = createAsyncThunk(
  'getFollowNum',
  async (userSeq, {rejectWithValue}) => {
    try {
      const res = await http.get(`follows/seq/${userSeq}`);
      if (res.status === 200) return true;
    } catch (error) {
      console.log('팔로우 번호 조회 에러', error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  user: null,
};

const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      deleteAllToken();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.user = null;
        deleteAllToken();
      });
  },
});

export const {logout} = oauthSlice.actions;
export default oauthSlice.reducer;
