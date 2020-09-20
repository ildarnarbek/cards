import React from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Post = (props) => {
  const { favorite, title, text } = props;

  const classes = useStyles();

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item direction="column" container xs={10}>
          <Typography variant="h4">{capitalizeFirstLetter(title)}</Typography>
          <Typography variant="body1">{capitalizeFirstLetter(text)}</Typography>
        </Grid>
        <Grid item direction="column" container xs={2} alignContent="center">
          <IconButton className={classes.iconBUtton}>
            {favorite ? (
              <StarIcon className={classes.starFilled} fontSize="large" />
            ) : (
              <StarBorderIcon fontSize="large" />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;
