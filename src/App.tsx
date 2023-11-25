import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppHeader from "./containers/AppHeader/AppHeader";
import About from "./containers/About/About";
import { Grid } from "@mui/material";
import theme from "./theme/Theme";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <Grid item>
          <AppHeader />
          <About />
        </Grid>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
