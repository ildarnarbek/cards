import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Post from '../Post';

const FavoritePostsColumn = (props) => {
  const { posts } = props;

  return (
    <Box>
      <Typography variant="h3">Favorite</Typography>
      <Box>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} text={post.body} favorite />
        ))}
      </Box>
    </Box>
  );
};

export default FavoritePostsColumn;
