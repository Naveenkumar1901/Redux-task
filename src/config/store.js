import themeSlice from '../slices/themeSlice';
import usernameSlice from '../slices/usernameSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    color: themeSlice,
    user: usernameSlice,
  },
});
export default store;
