import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { PostsContainerReducers } from '../containers/index';

const store = configureStore({
  reducer: combineReducers({
    ...PostsContainerReducers,
  }),
});

export default store;
