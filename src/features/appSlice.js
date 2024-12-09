import { createSlice } from '@reduxjs/toolkit';
import { PageEnum } from '../utils/EnumApp';

const appSlice = createSlice({
  name: 'appS',
  initialState: {
    appState: PageEnum.HOME,
  },
  reducers: {
    updateState: (state, action) => {
      console.log(action.payload)
      state.appState = action.payload
    },
  },
});

export const {
  updateState
} = appSlice.actions;

export default appSlice.reducer;
