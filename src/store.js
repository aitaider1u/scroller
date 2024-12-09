import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import searchReducer from './features/searchSlice';
import appReducer from './features/appSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    appState:appReducer
  },
});

export default store;