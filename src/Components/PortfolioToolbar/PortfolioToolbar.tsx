import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Button,
  IconButton,
} from '@mui/material';

import {Menu} from '@mui/icons-material';

const PageLink = styled(Button)(({theme}) => ({
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LastPageLink = styled(Button)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const HamburgerIconButton = styled(IconButton)(({theme}) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  marginRight: theme.spacing(3),
  marginLeft: 0,
  paddingLeft: 0,
}));

const HamburgerMenu = () => {
  return (
    <>
      <HamburgerIconButton>
        <Menu />
      </HamburgerIconButton>
    </>
  );
};

const PortfolioToolbar = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
      <AppBar>
        <Toolbar>
          <HamburgerMenu />
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Lee Dennis
          </Typography>
          <PageLink disableElevation variant="contained" href="#">
            Home
          </PageLink>
          <PageLink disableElevation variant="contained" href="#">
            Projects
          </PageLink>
          <PageLink disableElevation variant="contained" href="#">
            Experience
          </PageLink>
          <LastPageLink disableElevation variant="contained" href="#">
            Resume
          </LastPageLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PortfolioToolbar;
