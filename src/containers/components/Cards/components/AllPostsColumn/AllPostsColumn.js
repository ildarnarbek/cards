import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Post from '../Post';

const AllPostsColumn = (props) => {
  const { posts } = props;

  return (
    <Grid item direction="column" container xs={4}>
      <Typography variant="h3">All</Typography>
      <Box>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} text={post.body} />
        ))}
      </Box>
    </Grid>
  );
};

export default AllPostsColumn;
