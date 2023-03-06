import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import googlePlayImg from '../images/google-play.png';
import appStoreImg from '../images/app-store.png';
import windowsImg from '../images/windows.png';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
  },
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  sectionTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  appIcon: {
    marginRight: theme.spacing(2),
    width: 60,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  downloadIcon: {
    marginRight: theme.spacing(2),
    width: 120,
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to My Social Media
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Share your life with the world and connect with others.
          </Typography>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            className={classes.sectionTitle}
          >
            Our App
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Download our app on your favorite platform to stay connected on the
            go.
          </Typography>

          <Box mt={4} display="flex" justifyContent="center">
            <Image
              src={googlePlayImg}
              alt="Google Play Store"
              width={200} height={60}
              className={classes.downloadIcon}
            />
            <Image
              src={appStoreImg}
              alt="App Store"
              width={200} height={60}
              className={classes.downloadIcon}
            />
            <Image
              src={windowsImg}
              alt="Windows Store"
              width={200} height={60}
              className={classes.downloadIcon}
            />
          </Box>
        </Container>
      </Box>

      <Box className={classes.section} bgcolor="secondary.main" color="white">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            className={classes.sectionTitle}
          >
            Get Started
          </Typography>
          <Typography variant="h5" align="center">
            Join our community and start sharing your life today!
          </Typography>

          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign Up
            </Button>
            <Button variant="outlined" color="primary">
              Log In
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
