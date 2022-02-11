import {Grid, Alert, AlertTitle, useTheme} from '@mui/material';
import {TOOLBAR_HEIGHT} from '../App/App';

const InvalidUrlAlertBox = () => {
  const theme = useTheme();
  let errorText =
    'You have reached an invalid URL! Please use the provided navigation ';

  if (window.screen.width >= theme.breakpoints.values['md']) {
    errorText += 'at the top of the browser ';
  } else {
    errorText += 'from the side menu ';
  }

  errorText += 'to access a valid page.';

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - ' + TOOLBAR_HEIGHT + ' - 250px)',
        }}
      >
        <Grid item xs={10} sx={{textAlign: 'center'}}>
          <Alert
            severity="error"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <AlertTitle>Invalid URL</AlertTitle>
            {errorText}
          </Alert>
        </Grid>
      </Grid>
    </>
  );
};

export default InvalidUrlAlertBox;
