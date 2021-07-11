import React from 'react';
import { useStyles } from './Style';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  CardMedia,
  Avatar,
  Typography,
  CardActions,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Modal from './Modal/Modal';
import moment from 'moment';
// import { commentPost } from '../../../../Actions/postsAction';
// import { useDispatch } from 'react-redux';
// import { likePost } from '../../../../Actions/postsAction';
moment().format();
function PostCard({ post }) {
  const classes = useStyles();
  const [openModel, setOpenModel] = React.useState(false);
  const [comment, setComment] = React.useState(false);

  // const postId = post._id;
  // const userId = post.by.id;
  // const dispatch = useDispatch();
  const handleClickOpenModel = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };
  // const handleLikes = (postId, userId) => {
  //   dispatch(likePost(postId, userId));
  // };
  const handleComment = () => {
    // dispatch(commentPost(postId, userId, comment));
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <Card
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.root}
      style={{ marginBottom: '30px' }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label='artistPic'
            src='https://demos.creative-tim.com/nextjs-material-kit-pro/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg'
            className={classes.avatar}
          >
            {post.createdBy.userName}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.createdBy.userName}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        className={classes.media}
        image='https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?cs=srgb&dl=pexels-steve-johnson-1585325.jpg&fm=jpg'
        title={post.description}
      />
      <CardContent>
        <div className={classes.actions}>
          <Typography variant='h6' color='textPrimary'>
            the painting name
          </Typography>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Typography variant='body2' color='textSecondary' component='p'>
              {post.likes.length} likes
            </Typography>
            <IconButton aria-label='share' onClick={handleClickOpenModel}>
              <AddCommentIcon />
            </IconButton>
            <Modal
              openModel={openModel}
              handleCloseModel={handleCloseModel}
              comments={post.comments}
            />
            <Typography variant='body2' color='textSecondary' component='p'>
              {post.comments.length} comments
            </Typography>
            <IconButton aria-label='favorite'>
              <StarBorderIcon />
            </IconButton>
            <Typography variant='body2' color='textSecondary' component='p'>
              favorite
            </Typography>
          </CardActions>
        </div>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.description}
        </Typography>
      </CardContent>
      <TextField
        id='comment'
        label='Comment'
        placeholder='express what you think ....'
        multiline
        variant='filled'
        onChange={handleChange}
        className={classes.input}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end' style={{ paddingBottom: '15px' }}>
              <IconButton
                aria-label='comment on a post'
                onClick={handleComment}
              >
                <ArrowUpwardIcon style={{ color: '#00A9FE' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Card>
  );
}

export default PostCard;
