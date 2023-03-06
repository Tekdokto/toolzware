import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { AppBar, Toolbar, IconButton, makeStyles, Tooltip, Switch, Button } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: 'sticky',
    top: 0,
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
  button: {
    marginLeft: theme.spacing(2),
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set color for light and dark themes
    backgroundColor: theme.palette.type === 'dark' ? '#40E0D0' : '#f5f5f5', // set background color for light and dark themes
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#357ae8' : '#dbdbdb', // set hover background color for light and dark themes
    },
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
          // onClick={onDownload}
        >
          Download
        </Button>
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
          <Tooltip title="LinkedIn">
            <IconButton
              aria-label="LinkedIn"
              className={classes.socialIcon}
              component="a"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
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
