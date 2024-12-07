import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import searchrReducer from './features/searchSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchrReducer,
  },
});

export default store;