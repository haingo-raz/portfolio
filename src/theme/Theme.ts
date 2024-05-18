import { createTheme } from "@mui/material/styles";

const primaryMainColor = "#f6f6e9";
const secondaryMainColor = "#61a6ab";
const buttonMainColor = "#291b25";
const buttonTextColor = "#ffce6d";
const buttonHoverColor = "#ffce6d";
const buttonTextHoverColor = "#291b25";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.2em",
    },
    h2: {
      fontSize: "2em",
    },
    h5: {
      fontSize: "1.2em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "8px 26px",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: buttonMainColor,
            color: buttonTextColor,
            "&:hover": {
              background: buttonHoverColor,
              color: buttonTextHoverColor,
              animation: "gelatine 1s ease-in",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            background: buttonHoverColor,
            color: buttonTextHoverColor,
            "&:hover": {
              background: buttonMainColor,
              color: buttonTextColor,
              animation: "gelatine 1s ease-in",
            },
          },
        },
        {
          props: { variant: "text", color: "primary" },
          style: {
            color: buttonMainColor,
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: primaryMainColor,
    },
    secondary: {
      main: secondaryMainColor,
    },
  },
});

export default theme;
