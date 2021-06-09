import { AppBar, Avatar, IconButton, Toolbar } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React, { useState } from 'react';
import AppBarMenu from './Menus/AppBarMenu';
import { useStyles } from './Style';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../Actions/userActions';
import { useHistory } from 'react-router-dom';

function Appbar({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [isMessages, setIsMessages] = useState(true);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose3 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleCloseLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    dispatch(logoutAction(history));
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <>
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <h2 className={classes.title}>Glass House</h2>
          <AppBarMenu
            isMessages={isMessages}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
          <AppBarMenu
            handleClick2={handleClick2}
            handleClose2={handleClose2}
            anchorEl2={anchorEl2}
          />
          <IconButton
            style={{ color: 'white', padding: '1px' }}
            ref={anchorRef}
            id='composition-button'
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            <p
              className={classes.Paragraph}
              style={{ fontSize: '20px', paddingRight: '5px' }}
            >
              {user.userName}
            </p>
            <Avatar src={user.profilePic} />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom-start'
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose3}>Profile</MenuItem>
                      <MenuItem onClick={handleClose3}>My account</MenuItem>
                      <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;
