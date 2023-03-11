import { useState } from 'react';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FiDownload } from 'react-icons/fi';
import DownloadButton from '../DownloadButton';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    //   height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    image: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: -1,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    content: {
      width: '60%',
      zIndex: 1,
      textAlign: 'center',
      color: theme.palette.type === 'dark' ? '#fff' : '#000',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    },
    typography: {
        fontSize: '1rem',
        fontWeight: 'normal',
        textAlign: 'center',
        width: '70%',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
            width: '100%',
            marginBottom: theme.spacing(2),
        },
    },
    title: {
      fontWeight: 'normal',
      fontSize: '3rem',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginBottom: theme.spacing(2),
      },
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: 'normal',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        marginBottom: theme.spacing(2),
      },
    },
    button: {
      fontSize: '1.5rem',
      padding: theme.spacing(2, 4),
      borderRadius: 50,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        padding: theme.spacing(1, 2),
      },
    },
    icon: {
      marginLeft: theme.spacing(1),
      fontSize: '1.5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  })
);

const HomePageSectionOne = () => {
  const classes = useStyles();
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  const goToDownloadPage = () => {
    router.push('/download')
  }
  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={classes.root}>
      <Image
        src="/images/background.jpg"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={classes.image}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>Your No.1 Job Networking Platform</h1>
        <h2 className={classes.subtitle}>
          Share your skills with the world and connect with others.
        </h2>
        <h4 className={classes.typography}>
            Skiltime network you with top employers and talents for real job opportunities, 
            provides a real borderless personal transaction wallets, phone number to private messages and calls, webinars, 
            meetings, and tutorials. All for free across the world.
        </h4>
        <div>
          <DownloadButton label="Download Skiltime" onClick={goToDownloadPage} />
        </div>
      </div>
    </div>
  );
};

export default HomePageSectionOne;
