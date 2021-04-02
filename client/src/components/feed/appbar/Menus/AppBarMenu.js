import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Notification from "../notifications/Notifications";
import Messages from "../messages/Messages";
import { useStyles } from "./Style";
import { IconButton, MenuItem, Menu } from "@material-ui/core";

function AppBarMenu({
  isMessages,
  handleClick,
  handleClose,
  anchorEl,
  handleClick2,
  handleClose2,
  anchorEl2,
}) {
  const classes = useStyles();
  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={isMessages ? handleClick : handleClick2}
        className={classes.iconButton}
      >
        {isMessages ? (
          <>
            <EmailIcon
              fontSize="small"
              style={{ paddingRight: "5px", marginTop: "4px" }}
            />
            <p className={classes.Paragraph} style={{ fontSize: "20px" }}>
              messages
            </p>
          </>
        ) : (
          <>
            <NotificationsIcon
              fontSize="small"
              style={{ paddingRight: "5px", marginTop: "4px" }}
            />
            <p className={classes.Paragraph} style={{ fontSize: "20px" }}>
              Notifications
            </p>
          </>
        )}
        <ArrowDropDownIcon style={{ marginTop: "5px" }} />
      </IconButton>
      <Menu
        id="message-menu"
        anchorEl={isMessages ? anchorEl : anchorEl2}
        keepMounted
        open={isMessages ? Boolean(anchorEl) : Boolean(anchorEl2)}
        onClose={isMessages ? handleClose : handleClose2}
      >
        <MenuItem onClick={isMessages ? handleClose : handleClose2}>
          {isMessages ? <Messages /> : <Notification />}
        </MenuItem>
        <MenuItem onClick={isMessages ? handleClose : handleClose2}>
          {isMessages ? <Messages /> : <Notification />}
        </MenuItem>
        <MenuItem onClick={isMessages ? handleClose : handleClose2}>
          {isMessages ? <Messages /> : <Notification />}
        </MenuItem>
      </Menu>
    </>
  );
}

export default AppBarMenu;
