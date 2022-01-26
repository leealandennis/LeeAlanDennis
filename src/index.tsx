import {ThemeProvider} from '@emotion/react';
import {createTheme, CssBaseline} from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
