import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
  Avatar,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function Modal({ handleCloseModel, openModel, comments }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dialog
        open={openModel}
        TransitionComponent={Transition}
        keepMounted
        scroll='paper'
        onClose={handleCloseModel}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {'All comments'}
        </DialogTitle>
        <Divider />
        <DialogContent>
          {!comments?.length ? (
            <CircularProgress />
          ) : (
            comments.map((comment) => (
              <>
                <div className={classes.header}>
                  <Avatar src='https://demos.creative-tim.com/nextjs-material-kit-pro/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg' />
                  <Typography
                    variant='subtitle1'
                    className={classes.artistName}
                  >
                    {comment.by.userName}
                  </Typography>
                </div>
                <DialogContentText
                  id='comment-body'
                  className={classes.commentBody}
                >
                  {comment.body}
                </DialogContentText>
                <Divider />
              </>
            ))
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModel} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
