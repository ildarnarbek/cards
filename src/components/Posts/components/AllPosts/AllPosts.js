import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Post from '../Post';

const AllPosts = (props) => {
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
AllPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string, body: PropTypes.string })),
};

AllPosts.defaultProps = {
  posts: [],
};

export default AllPosts;
