import { Grid, Paper, CircularProgress } from '@material-ui/core';
import React from 'react';
import PostCard from './postCard/PostCard';
import { useStyles } from './Style';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.PostReducer);
  return (
    <div className={classes.root}>
      <div style={{ padding: '45px 4% 0 4%' }}>
        <Grid container>
          <Grid
            item
            xs={8}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '20px',
            }}
          >
            {!posts.length ? (
              <CircularProgress />
            ) : (
              <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                // next={}
                height={600}
                hasMore={posts.length + 1 ? false : true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {posts.map((post) => (
                  <PostCard post={post} />
                ))}
              </InfiniteScroll>
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
