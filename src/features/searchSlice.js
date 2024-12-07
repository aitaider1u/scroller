import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    currentSearch: "",
    historyResearches: ["word 1", "word 2", "word 3", "word 4"]
  },
  reducers: {
    addToHistoryResearches: (state, action) => {
      const word = action.payload;
      if (!state.historyResearches.includes(word)) {
        state.historyResearches.push(word);
      }
    },
    removeFromHistoryResearches: (state, action) => {
      const word = action.payload; 
      state.historyResearches = state.historyResearches.filter(
        (item) => item !== word
      ); // Remove the word from the array
    },
    updatecurrentSearch: (state, action) => {
      console.log(action.payload)
      state.currentSearch = action.payload; 
    },
  },
});

export const {
  addToHistoryResearches,
  removeFromHistoryResearches,
  updatecurrentSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
