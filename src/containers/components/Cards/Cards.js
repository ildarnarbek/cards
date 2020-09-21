import React, { useEffect } from 'react';
import { isEmpty, isNil } from 'ramda';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';

import AddPostForm from './components/AddPostForm';
import AllPostsColumn from './components/AllPostsColumn';
import FavoritePostsColumn from './components/FavoritePostsColumn';

import { useActions } from '../../../slices/PostSlice';

const Cards = () => {
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
        <AllPostsColumn posts={filtredPosts} />
        <Grid item direction="column" container xs={4}>
          <Grid item>{!isEmpty(favoritePosts) && <FavoritePostsColumn posts={favoritePosts} />}</Grid>
          <Grid item>
            <AddPostForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
