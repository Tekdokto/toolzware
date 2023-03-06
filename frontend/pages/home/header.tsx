import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton, makeStyles, Tooltip, Switch } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  socialIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Header = ({toggleTheme, themeMode}) => {
  const classes = useStyles();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link href="/" passHref>
          <IconButton edge="start" color="inherit" aria-label="Home">
            <img src="/logo.svg" alt="Logo" width="32" height="32" />
          </IconButton>
        </Link>
        <div className={classes.socialLinks}>
          <Tooltip title="Instagram">
            <IconButton
              aria-label="Instagram"
              className={classes.socialIcon}
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton
              aria-label="Twitter"
              className={classes.socialIcon}
              component="a"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton
              aria-label="Facebook"
              className={classes.socialIcon}
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              color="default"
              icon={<Brightness4Icon />}
              checkedIcon={<Brightness7Icon />}
            />
          </Tooltip> */}
          <IconButton onClick={toggleTheme}>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
