import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Appbar from './appbar/Appbar';
import Posts from './Posts/Posts';
import TopArtists from './TopArtists/TopArtists';
import { getPosts } from '../../Actions/postsAction';

function Feed() {
  const dispatch = useDispatch();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div style={{ padding: '1px' }}>
      <Appbar user={user} />
      <TopArtists />
      <Posts />
    </div>
  );
}

export default Feed;
