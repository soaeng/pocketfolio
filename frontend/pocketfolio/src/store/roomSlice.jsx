import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../api/axios';



const initialState = {};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = roomSlice.actions;
export default roomSlice.reducer;
