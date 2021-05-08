import post from '../models/post.js';
import Mongoose from 'mongoose';

export const getAllPosts = async (req, res) => {
  try {
    const result = await post
      .find()
      .populate('createdBy', 'email userName')
      .populate('comments.by', 'userName');
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const createPost = async (req, res) => {
  const data = req.body;
  try {
    const result = await post.create(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const likePost = async (req, res) => {
  const { postId } = req.params;
  const { likedBy } = req.body;
  if (!Mongoose.Types.ObjectId.isValid(postId))
    return res.status(404).send('No post whith that id');
  const postToLike = await post.findById(postId);
  postToLike.likes.push({
    likedBy: likedBy,
  });
  const likedPost = await postToLike.save();
  res.status(200).json(likedPost);
};
export const commentPost = async (req, res) => {
  const { postId } = req.params;
  const { by, body } = req.body;

  if (!Mongoose.Types.ObjectId.isValid(postId))
    return res.status(404).send('No post whith that id');
  const postToComment = await post.findById(postId);
  if (!postToComment) return res.status(404).send('No post whith that id');
  postToComment.comments.push({
    by: by,
    body: body,
  });
  const commentedPost = await postToComment.save();
  res.status(200).json(commentedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post whith that id');

  await post.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully' });
};

export const getAllComments = async (req, res) => {
  const { postId } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(postId))
    return res.status(404).send('No post whith that id');
  try {
    const thePost = await post.findById(postId).populate('comments.by');
    const allComments = thePost.comments;
    res.status(200).json(allComments);
  } catch (error) {
    res.json(error);
  }
};
export const getAllLikes = async (req, res) => {
  const { postId } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(postId))
    return res.status(404).send('No post whith that id');
  try {
    const thePost = await post.findById(postId).populate('likes.likedBy');
    const allLikes = thePost.likes;
    res.status(200).json(allLikes);
  } catch (error) {
    res.json(error);
  }
};
