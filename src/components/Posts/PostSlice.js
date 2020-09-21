import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import PostRepository from '../../repositories/PostRepository';

const sliceName = 'PostSlice';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    data: [],
    processing: true,
    processingError: null,
  },
  reducers: {
    start(state) {
      state.processingError = null;
      state.processing = true;
    },
    fail(state, { payload }) {
      state.processingError = payload.error;
      state.processing = false;
    },
    loadSuccess(state, { payload }) {
      state.data = payload;
      state.processing = false;
    },
    postAdded(state, { payload }) {
      state.data.push(payload);
    },
    toggledFavorite(state, { payload }) {
      const existingPost = state.data.find((post) => post.id === payload);
      if (existingPost) {
        existingPost.isFavorite = !existingPost.isFavorite;
      }
    },
  },
});

/* eslint no-param-reassign: 1 */

const { start, fail, loadSuccess, postAdded, toggledFavorite } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    getPosts: () => {
      dispatch(start());
      return PostRepository.getPosts()
        .then((response) => response.json())
        .then((data) => data.filter((post) => post.userId === 1))
        .then((data) => data.map((post) => ({ ...post, isFavorite: false })))
        .then((data) => {
          dispatch(loadSuccess(data));
        })
        .catch((error) => {
          dispatch(fail({ error: error.message }));

          return Promise.reject(error);
        });
    },
    addPost: (payload) => {
      dispatch(postAdded(payload));
    },
    toggleFavorite: (payload) => {
      dispatch(toggledFavorite(payload));
    },
  };
};

export default slice.reducer;
