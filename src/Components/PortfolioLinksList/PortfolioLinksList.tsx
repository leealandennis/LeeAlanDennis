import {
  ListItem,
  ListItemButton,
  styled,
  ListItemText,
  Icon,
  useTheme,
} from '@mui/material';
import {NavLink} from 'react-router-dom';

import {ListItemProps} from '@mui/material';

export interface PortfolioLink {
  name: string;
  iconName: string;
  href: string;
}

interface PortfolioLinksListProps {
  buttonStyle: {};
  links: PortfolioLink[];
  setOpenDrawer: Function;
}

const PorfolioLinksList = (
  portfolioLinksListProps: PortfolioLinksListProps
) => {
  const {buttonStyle, links, setOpenDrawer} = portfolioLinksListProps;

  const LinkListItem = styled(ListItem)<ListItemProps & NavLinkProps>(
    ({theme}) => ({
      paddingLeft: theme.spacing(2),
    })
  );

  const LinksListItemText = styled(ListItemText)(({theme}) => ({
    color: theme.palette.primary.contrastText,
  }));

  const theme = useTheme();

  type NavLinkProps = {
    to: string;
    component: React.ElementType;
    style: Function;
  };

  const handleClickLink = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {links.map((portfolioLink: PortfolioLink, index: number) => {
        return (
          <LinkListItem
            component={NavLink}
            to={portfolioLink.href}
            style={({isActive}) => ({
              backgroundColor: isActive
                ? theme.palette.primary.light
                : 'inherit',
            })}
            key={index}
            onClick={handleClickLink}
          >
            <ListItemButton component="a" sx={{paddingLeft: '0'}}>
              <Icon sx={buttonStyle}>{portfolioLink.iconName}</Icon>
              <LinksListItemText>{portfolioLink.name}</LinksListItemText>
            </ListItemButton>
          </LinkListItem>
        );
      })}
    </>
  );
};

export default PorfolioLinksList;
