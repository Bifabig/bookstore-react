import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    isLive: (state) => {
      state.categories.push('Under construction');
    },
  },
});

export const { isLive } = categoriesSlice.actions;
export default categoriesSlice.reducer;
