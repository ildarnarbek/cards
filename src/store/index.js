import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { CardsContainerReducers } from '../containers/index';

const store = configureStore({
  reducer: combineReducers({
    ...CardsContainerReducers,
  }),
});

export default store;
