import React, { Suspense, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppHeader from "./containers/AppHeader/AppHeader";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import { Grid, styled } from "@mui/material";
import theme from "./theme/Theme";
import "./App.scss";
import { Link } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { type GridProps } from "@mui/material/Grid";

interface RootProps extends GridProps {}

const Root = styled(Grid)<RootProps>(({ theme }) => ({
  ".btn-top": {
    cursor: "pointer",
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
    position: "fixed",
    right: "15px",
    bottom: "15px",
    borderRadius: "50%",
    padding: 4,
  },
}));

function App() {
  const [isScrollButtonShown, setIsScrollButtonShown] =
    useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsScrollButtonShown(true);
      } else {
        setIsScrollButtonShown(false);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <Root item>
          <AppHeader />
          <About />
          <Projects />
          {isScrollButtonShown && (
            <Link to="about" smooth={true}>
              <ArrowUpwardIcon className="btn-top" />
            </Link>
          )}
        </Root>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
