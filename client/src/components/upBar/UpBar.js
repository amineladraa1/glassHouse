import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import SignInModal from './SignInModal/SignInModal';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'rgba(255, 255, 255, .15)',
    backdropFilter: 'blur(5px)',
    padding: '1px 14%',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Dancing Script',
    color: 'white',
  },
  Paragraph: {
    fontFamily: 'Dancing Script',
    marginTop: '0',
    paddingTop: '20px',
  },
}));
function UpBar() {
  const classes = useStyles();
  const [openModel, setOpenModel] = React.useState(false);
  const handleClickOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar>
        <h2 className={classes.title}>Glass House</h2>

        <IconButton
          style={{ color: 'white', padding: '1px' }}
          onClick={handleClickOpenModel}
        >
          <p
            className={classes.Paragraph}
            style={{ fontSize: '20px', paddingRight: '5px' }}
          >
            you already have an acount signIN
          </p>
          <ArrowDropDownIcon style={{ marginTop: '5px' }} />
        </IconButton>
        <SignInModal
          handleCloseModel={handleCloseModel}
          openModel={openModel}
        />
      </Toolbar>
    </AppBar>
  );
}

export default UpBar;
