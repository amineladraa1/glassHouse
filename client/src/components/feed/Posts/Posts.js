import { Grid, Paper, CircularProgress } from '@material-ui/core';
import React from 'react';
import PostCard from './postCard/PostCard';
import { useStyles } from './Style';
import { useSelector } from 'react-redux';

function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.PostReducer);
  return (
    <div className={classes.root}>
      <div style={{ padding: '45px 14% 0 14%' }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={8}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!posts?.length ? (
              <CircularProgress />
            ) : (
              posts.map((post) => <PostCard post={post} />)
            )}
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Posts;
