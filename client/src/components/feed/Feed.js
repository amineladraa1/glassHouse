import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Appbar from './appbar/Appbar';
import Posts from './Posts/Posts';
import TopArtists from './TopArtists/TopArtists';
import { getPosts } from '../../Actions/postsAction';

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div style={{ padding: '1px' }}>
      <Appbar />
      <TopArtists />
      <Posts />
    </div>
  );
}

export default Feed;
