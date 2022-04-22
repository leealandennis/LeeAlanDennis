import {Grid, IconButton, styled, Typography, useTheme} from '@mui/material';
import {LinkedIn, Email, GitHub} from '@mui/icons-material';

interface Contact {
  icon: JSX.Element;
  href: string;
}

const contacts: Contact[] = [
  {
    icon: <Email color="primary" fontSize="large" />,
    href: 'mailto: leealandennis@gmail.com',
  },
  {
    icon: <GitHub color="primary" fontSize="large" />,
    href: 'https://github.com/leealandennis/',
  },
  {
    icon: <LinkedIn color="primary" fontSize="large" />,
    href: 'https://www.linkedin.com/in/lee-dennis-93b427ab/',
  },
];

const ContactMeGrid = styled(Grid)(({theme}) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: '25vh',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: '10vh',
  },
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  margin: 'auto',
}));

const ContactMe = () => {
  const theme = useTheme();

  return (
    <ContactMeGrid container>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{textAlign: 'center', marginTop: '25px'}}>
          Feel free to reach out to me through the resources below!
        </Typography>
      </Grid>
      {contacts.map((contact: Contact) => {
        return (
          <Grid
            item
            sx={{
              margin: '0 3vw 0 3vw',
              paddingTop: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <IconButton
              sx={{transform: 'scale(1.8)'}}
              target="_blank"
              href={contact.href}
            >
              {contact.icon}
            </IconButton>
          </Grid>
        );
      })}
    </ContactMeGrid>
  );
};

export default ContactMe;
