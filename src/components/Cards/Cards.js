import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Card, Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm';

const Cards = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container justify="space-around">
        <Grid item direction="column" container xs={4}>
          <Typography variant="h3">All</Typography>
          <Box>
            <Post />
            <Post />
            <Post />
          </Box>
        </Grid>
        <Grid item direction="column" xs={4}>
          <Grid item>
            <Typography variant="h3">Favorites</Typography>
            <Box>
              <Post favorite />
            </Box>
          </Grid>
          <Grid item>
            <AddPostForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
