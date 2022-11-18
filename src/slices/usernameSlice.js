import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'user',
  initialState: {
    text: '',
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { changeText } = nameSlice.actions;
export default nameSlice.reducer;
