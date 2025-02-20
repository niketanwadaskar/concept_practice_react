// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import dataReducer from './slices/dataSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers as needed
    data: dataReducer
  },
});

export default store