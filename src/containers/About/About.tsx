import React from "react";
import { Stack, Grid, Typography, styled, Button } from "@mui/material";
import { type GridProps } from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

interface RootProps extends GridProps {}

const Root = styled(Grid)<RootProps>(({ theme }) => ({
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-30px)",
    },
    "60%": {
      transform: "translateY(-15px)",
    },
  },
  ".social-info": {
    minHeight: "100vh",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
  },
  ".container img": {
    maxHeight: "45%",
    maxWidth: "45%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  ".position": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
  },
  ".description": {
    height: "100vh",
    background: theme.palette.secondary.main,
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  },
  ".social-info, .description": {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },
  ".txt-description": {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  ".project-btn": {
    animation: "bounce 2s 2",
  }
}));

const About = () => {
  const { t } = useTranslation();
  return (
    <Root container id="about">
      <Grid item xs={12} lg={6} className="social-info">
        <Stack
          spacing={2}
          className="container"
          alignItems="center"
          justifyContent="center"
        >
          {/* <img src="/imgs/cute.png" alt="avatar" /> */}
          <Typography variant="h1">{t("about.name")}</Typography>
          <Typography variant="h2" className="position">{t("about.position")}</Typography>
          <Stack direction="row" spacing={4} className="social-links">
            <Button
              variant="text"
              onClick={() => window.open(`${t("about.linkedin")}`, "_blank")}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="text"
              onClick={() => window.open(`${t("about.github")}`, "_blank")}
            >
              <GitHubIcon />
            </Button>
            <Button
              variant="text"
              href={`mailto:${t("about.mailto")}`}
              target="_blank"
            >
              <EmailIcon />
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6} className="description">
        <Stack
          spacing={4}
          className="container"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1">{t("about.title")}</Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            className="txt-description"
          >
            {t("about.description")}
          </Typography>
          <Stack direction="row" spacing={4}>
            {/* <Button variant="outlined">{t("about.job")}</Button> */}
            <Link to="projects" smooth={true}>
              <Button variant="contained" className="project-btn">{t("about.projects")}</Button>   
            </Link>
          </Stack>
        </Stack>
      </Grid>
    </Root>
  );
};

export default About;