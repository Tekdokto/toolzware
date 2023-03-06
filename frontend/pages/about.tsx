import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import Image from 'next/image';
import Header from './home/header'

// import googlePlayLightImg from '../public/images/google-play-light.png';
// import appStoreLightImg from '../public/images/app-store-light.png';
// import windowsLightImg from '../public/images/windows-light.png';
// import googlePlayDarkImg from '../public/images/google-play-dark.png';
// import appStoreDarkImg from '../public/images/app-store-dark.png';
// import windowsDarkImg from '../public/images/windows-dark.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    padding: '30px',
    overflow: 'scroll',
    overflowX: 'hidden'

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
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set color for light and dark themes
    backgroundColor: theme.palette.type === 'dark' ? '#4285F4' : '#f5f5f5', // set background color for light and dark themes
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#357ae8' : '#dbdbdb', // set hover background color for light and dark themes
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set icon color for light and dark themes
  },
  downloadIcon: {
    marginRight: theme.spacing(2),
    width: 120,
  },
}));

export default function LandingPage({toggleTheme, themeMode}) {
  const classes = useStyles();
  const theme = useTheme();
  const isDarkMode = useMediaQuery(theme.breakpoints.down('md'));

  // const googlePlayImg = isDarkMode ? googlePlayDarkImg : googlePlayLightImg;
  // const appStoreImg = isDarkMode ? appStoreDarkImg : appStoreLightImg;
  // const windowsImg = isDarkMode ? windowsDarkImg : windowsLightImg;

  return (
    <>
    
    <Header toggleTheme={toggleTheme} themeMode={themeMode} />
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Your No1 Jobs Networking Platform
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Share your skills with the world and connect with others.
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
            {/* <Image
              src={undefined}
              alt="Google Play Store"
              width={120}
              height={48}
              className={classes.downloadIcon}
            /> */}
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<GetAppIcon className={classes.icon} />}
              href="https://play.google.com/store/apps/details?id=com.example.app"
              target="_blank"
              rel="noopener"
            >
              Download on Google Play
            </Button>
            {/* <Image
              src={undefined}
              alt="App Store"
              width={120}
              height={48}
              className={classes.downloadIcon}
            /> */}
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<GetAppIcon className={classes.icon} />}
              href="https://play.google.com/store/apps/details?id=com.example.app"
              target="_blank"
              rel="noopener"
            >
              Download on App Store
            </Button>
            {/* <Image
              src={undefined}
              alt="Windows Store"
              width={120}
              height={48}
              className={classes.downloadIcon}
            /> */}
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<GetAppIcon className={classes.icon} />}
              href="https://play.google.com/store/apps/details?id=com.example.app"
              target="_blank"
              rel="noopener"
            >
              Download For Windows
            </Button>
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
            Join our community and start networking today!
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
  )
}
