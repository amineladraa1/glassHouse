import * as api from '../Api/Api.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId, userId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId, userId);
    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const commentPost = (postId, userId, body) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId, userId, body);
    dispatch({ type: 'COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};
