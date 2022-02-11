import {ThemeProvider} from '@emotion/react';
import {createTheme, CssBaseline} from '@mui/material';
import {grey} from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
