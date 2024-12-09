import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    currentSearch: "random",
    currentPage: 1,
    historyResearches: [],
    likedImages:[]
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
      ); 
    },
    updatecurrentSearch: (state, action) => {
      state.currentSearch = action.payload; 
      state.currentPage = 1; 

    },
    updatecurrentPage: (state, action) => {
      state.currentPage = action.payload; 
    },
    addLikedImage: (state, action) => {
      const imageUrl = action.payload;
      if (!state.likedImages.includes(imageUrl)) {
        state.likedImages.push(imageUrl); // Add image URL if it doesn't exist
      }
    },
    removeLikedImage: (state, action) => {
      const imageUrl = action.payload;
      state.likedImages = state.likedImages.filter(
        (url) => url !== imageUrl
      ); // Remove the specific image URL
    },
  },
});

export const {
  addToHistoryResearches,
  removeFromHistoryResearches,
  updatecurrentSearch,
  updatecurrentPage,
  addLikedImage,
  removeLikedImage
} = searchSlice.actions;

export default searchSlice.reducer;
