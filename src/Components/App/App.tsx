import {
  AppBar,
  Box,
  Toolbar,
  Drawer,
  Typography,
  styled,
  IconButton,
  useTheme,
  Grid,
  Button,
} from '@mui/material';

import {Menu} from '@mui/icons-material';
import {useState} from 'react';
import PortfolioLinksList from '../PortfolioLinksList/PortfolioLinksList';
import {PortfolioLink} from '../PortfolioLinksList/PortfolioLinksList';
import HomePage from '../HomePage/HomePage';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import InvalidUrlAlertBox from '../InvalidUrlAlertBox/InvalidUrlAlertBox';
import Resume from '../Resume/Resume';

export const TOOLBAR_HEIGHT = '55px';

interface LinksDrawerProps {
  open: boolean;
  setOpenDrawer: Function;
}

interface PortfolioToolbarProps {
  setOpenDrawer: Function;
}

interface HamburgerMenuProps {
  setOpenDrawer: Function;
}

const porftolioLinks: PortfolioLink[] = [
  {
    name: 'Home',
    iconName: 'house',
    href: '/',
  },
  // {
  //   name: 'Projects',
  //   iconName: 'spellcheck',
  //   href: '/projects',
  // },
  // {
  //   name: 'Experience',
  //   iconName: 'work',
  //   href: '/experience',
  // },
  {
    name: 'Resume',
    iconName: 'file_present',
    href: '/resume',
  },
  // {
  //   name: 'Contact Me',
  //   iconName: 'email',
  //   href: '/contact',
  // },
];

const HamburgerMenu = (hamburgerMenuProps: HamburgerMenuProps) => {
  const {setOpenDrawer} = hamburgerMenuProps;

  const handleHamburgerClick = (): void => {
    setOpenDrawer((prevVal: boolean) => {
      return !prevVal;
    });
  };

  const theme = useTheme();

  return (
    <>
      <HamburgerIconButton onClick={handleHamburgerClick}>
        <Menu sx={{color: theme.palette.primary.contrastText}} />
      </HamburgerIconButton>
    </>
  );
};

const PortfolioToolbar = (portfolioToolbarProps: PortfolioToolbarProps) => {
  const {setOpenDrawer} = portfolioToolbarProps;

  type NavLinkButtonProps = {
    component: React.ElementType;
    to: string;
    style: Function;
  };

  const PageLink = styled(Button)<NavLinkButtonProps>(({theme}) => ({
    '&:not(:last-child)': {marginRight: theme.spacing(4)},
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
      <AppBar>
        <Toolbar>
          <HamburgerMenu setOpenDrawer={setOpenDrawer} />
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Lee Dennis
          </Typography>
          {porftolioLinks.map((portfolioLink: PortfolioLink, index: number) => {
            return (
              <PageLink
                component={NavLink}
                to={portfolioLink.href}
                disableElevation
                variant="contained"
                key={index}
                style={({isActive}) => ({
                  boxShadow: isActive
                    ? 'inset 1px 1px 0 white, inset -1px -1px 0 white'
                    : 'none',
                })}
              >
                {portfolioLink.name}
              </PageLink>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LinksDrawer = (linksDrawerProps: LinksDrawerProps) => {
  const {open, setOpenDrawer} = linksDrawerProps;

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const DrawerBox = styled(Box)(({theme}) => ({
    width: 'auto',
    height: '100vh',
    backgroundColor: theme.palette.primary.dark,
  }));

  const theme = useTheme();

  const buttonStyle = {
    fontSize: '20px',
    marginRight: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  };

  return (
    <Drawer open={open} onClose={handleCloseDrawer}>
      <DrawerBox>
        <PortfolioLinksList
          buttonStyle={buttonStyle}
          links={porftolioLinks}
          setOpenDrawer={setOpenDrawer}
        ></PortfolioLinksList>
      </DrawerBox>
    </Drawer>
  );
};

const HamburgerIconButton = styled(IconButton)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  paddingLeft: 0,
}));

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const PortfolioContainerGrid = styled(Grid)(() => ({
    paddingTop: TOOLBAR_HEIGHT,
  }));

  return (
    <>
      <BrowserRouter>
        <PortfolioToolbar setOpenDrawer={setOpenDrawer} />
        <LinksDrawer open={openDrawer} setOpenDrawer={setOpenDrawer} />
        <PortfolioContainerGrid container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<InvalidUrlAlertBox />} />
          </Routes>
        </PortfolioContainerGrid>
      </BrowserRouter>
    </>
  );
};

export default App;
