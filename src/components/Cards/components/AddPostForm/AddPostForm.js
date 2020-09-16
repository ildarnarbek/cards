import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const AddPostForm = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3">Add new post</Typography>
      <form noValidate autoComplete="off">
        <Grid container direction="column">
          <Typography className={classes.text} variant="subtitle">
            Title
          </Typography>
          <TextField className={classes.textField} size="small" id="outlined-basic" variant="outlined" />
          <Typography className={classes.text} variant="subtitle">
            Text
          </Typography>
          <TextField
            className={classes.textField}
            size="small"
            id="outlined-basic"
            multiline
            rowsMax={4}
            variant="outlined"
          />
          <Button variant="contained" className={classes.button}>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default AddPostForm;
