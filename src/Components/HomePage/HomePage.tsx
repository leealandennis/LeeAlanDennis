import {Grid, Box, Typography, styled} from '@mui/material';
import {TOOLBAR_HEIGHT} from '../App/App';

const HomePage = () => {
  const HomePageGridContainer = styled(Grid)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - ' + TOOLBAR_HEIGHT + ')',
      alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px',
    },
  }));

  const IntroText = styled(Typography)(() => ({
    margin: '0 5vw 1em 5vw',
    textAlign: 'justify',
  }));

  return (
    <>
      <HomePageGridContainer container>
        <Grid item sm={8} xs={12} sx={{textAlign: 'center'}}>
          <IntroText>
            Hi, I'm Lee! I'm an experienced software developer with a
            demonstrated history of working in the information technology
            industry. I am skilled in several programming languages while
            focussing on web development and SaaS.
          </IntroText>
          <IntroText>
            I strongly believe that myself and others always have more to learn
            and improve upon using the abundant resources we have around us. I
            am constantly trying to improve myself through hard work,
            determination and listening to others around me.
          </IntroText>
          <IntroText>
            Feel free to browse my site to learn more about my projects,
            experience and more. I look forward to hearing from you!
          </IntroText>
        </Grid>
        <Grid item sm={4} xs={12} sx={{textAlign: 'center'}}>
          <Box
            component="img"
            src="profile.png"
            sx={{width: '95%', borderRadius: '300px'}}
          />
        </Grid>
      </HomePageGridContainer>
    </>
  );
};

export default HomePage;
