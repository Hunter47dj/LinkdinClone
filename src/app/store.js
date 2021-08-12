import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// html css js wrap in react 
//react is a lib 
// redux is layer around react

// prop drilling  pass object up the tree thn agan down the tree
