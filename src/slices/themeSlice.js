import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

export const toggleSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { changeTheme } = toggleSlice.actions;
export default toggleSlice.reducer;
