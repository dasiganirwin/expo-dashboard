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
  AppBar: {
    backgroundcolor : '#2E3B55',
  }
}));


function Header() {
  const logo = "/images/Expo-logo-wh.png";
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {<img src={ logo } alt="expo-logo"/>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
