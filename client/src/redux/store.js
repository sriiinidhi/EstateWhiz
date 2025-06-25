import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here as needed
})
const persistConfig = {
  key: 'root',
  storage,
  version:1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable data
    }),
})

export const persistor = persistStore(store);