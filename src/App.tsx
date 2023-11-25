import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material';
import { DefaultTheme } from './theme';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Grid item>
        <Typography>Portfolio</Typography>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
