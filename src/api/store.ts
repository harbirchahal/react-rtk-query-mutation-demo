import { configureStore } from '@reduxjs/toolkit';

import userApi from './userApi';

const store = configureStore({
  // Add the generated reducer as a specific top-level slice
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
  devTools: true,
});

export default store;
