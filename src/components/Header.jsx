import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const logo = "/images/expo-logo-wh.png";
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
      <img
        src={logo}
        width="85"
        height="30"
        className="d-inline-block align-top"
        alt="Expo logo"
      />
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default Header;
