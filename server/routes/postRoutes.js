import express from 'express';
import {
  createPost,
  likePost,
  commentPost,
  deletePost,
  getAllPosts,
  getAllComments,
  getAllLikes,
} from '../controlers/postControl.js';

const router = express.Router();

router.post('/createpost', createPost);
router.get('/getposts', getAllPosts);
router.post('/likepost/:postId', likePost);
router.post('/commentpost/:postId', commentPost);
router.post('/deletepost/:postId', deletePost);
router.get('/getcomments/:postId', getAllComments);
router.get('/getlikes/:postId', getAllLikes);

export default router;
