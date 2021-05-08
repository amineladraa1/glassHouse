import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchPosts = () => api.get('post/getposts');
export const likePost = (postId, userId) =>
  api.post(`post/likepost/${postId}`, userId);

export const commentPost = (postId, userId, body) =>
  api.post(`post/commentpost/${postId}`, userId, body);

export const signUp = (formData) => api.post('user/signup', formData);
export const signIn = (form) => api.post('user/signin', form);
