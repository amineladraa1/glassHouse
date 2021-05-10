import { AppBar, Avatar, IconButton, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './Style';
import AppBarMenu from './Menus/AppBarMenu';

function Appbar({ user }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [isMessages, setIsMessages] = useState(true);
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
          <IconButton style={{ color: 'white', padding: '1px' }}>
            <p
              className={classes.Paragraph}
              style={{ fontSize: '20px', paddingRight: '5px' }}
            >
              {user.userName}
            </p>
            <Avatar src={user.profilePic} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;
