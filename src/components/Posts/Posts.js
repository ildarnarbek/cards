import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isNil } from 'ramda';

import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import AddPostForm from './components/AddPostForm';
import AllPosts from './components/AllPosts';
import FavoritePosts from './components/FavoritePosts';

import { useActions } from './PostSlice';

const Posts = () => {
  const postSlice = useSelector((state) => state.PostSlice.data);
  const loadingError = useSelector((state) => state.PostSlice.processingError);

  const { getPosts } = useActions();

  const favoritePosts = postSlice.filter((post) => post.isFavorite === true);
  const filtredPosts = postSlice.filter((post) => post.isFavorite === false);

  useEffect(() => {
    getPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isEmpty(postSlice.data) && !isNil(loadingError)) {
    return (
      <Backdrop open>
        <Alert severity="error">{loadingError}</Alert>
      </Backdrop>
    );
  }

  return (
    <Container>
      <Grid container justify="space-around">
        <AllPosts posts={filtredPosts} />
        <Grid item direction="column" container xs={4}>
          <Grid item>{!isEmpty(favoritePosts) && <FavoritePosts posts={favoritePosts} />}</Grid>
          <Grid item>
            <AddPostForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
