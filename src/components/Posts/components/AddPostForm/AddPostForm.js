import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'ramda';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useActions } from '../../PostSlice';

import useStyles from './styles';

const AddPostForm = () => {
  const classes = useStyles();

  const postIds = useSelector((state) => state.PostSlice.data.map((post) => post.id));
  const newPostId = isEmpty(postIds) ? 1 : 1 + Math.max(...postIds);

  const { addPost } = useActions();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setBody(e.target.value);

  const onSubmitPostClicked = () => {
    if (title && body) {
      addPost({
        userId: 1,
        id: newPostId,
        title,
        body,
        isFavorite: false,
      });

      setTitle('');
      setBody('');
    }
  };

  return (
    <Box>
      <Typography variant="h3">Add new post</Typography>
      <form noValidate autoComplete="off">
        <Grid container direction="column">
          <Typography className={classes.text} variant="subtitle1">
            Title
          </Typography>
          <TextField
            value={title}
            className={classes.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={onTitleChanged}
          />
          <Typography className={classes.text} variant="subtitle1">
            Text
          </Typography>
          <TextField
            value={body}
            className={classes.textField}
            size="small"
            id="outlined-basic"
            multiline
            rowsMax={4}
            variant="outlined"
            onChange={onTextChanged}
          />
          <Button variant="contained" className={classes.button} onClick={onSubmitPostClicked}>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default AddPostForm;
