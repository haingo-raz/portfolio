import React from "react";
import { Stack, Grid, Typography, styled, Button } from "@mui/material";
import { type GridProps } from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

interface RootProps extends GridProps {}

const Root = styled(Grid)<RootProps>(({ theme }) => ({
  ".social-info": {
    minHeight: "100vh",
    background: theme.palette.primary.main
  },
  ".container img": {
    maxHeight: "45%",
    maxWidth: "45%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  ".description": {
    height: "100vh",
    background: theme.palette.secondary.main
  },
  ".social-info, .description": {
    // padding: theme.spacing(2),
  },
}));

const About = () => {
  const { t } = useTranslation();
  return (
    <Root container>
      <Grid item xs={12} lg={6} className="social-info">
        <Stack spacing={2} className="container" alignItems="center" justifyContent="center">
          <img src="/imgs/cute.png" alt="avatar" />
          <Typography variant="h1">{t("about.name")}</Typography>
          <Typography variant="h2">{t("about.position")}</Typography>
          <Stack direction="row" spacing={4} className="social-links">
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6} className="description">
        <Stack spacing={2} className="container" alignItems="center" justifyContent="center">
          <Typography variant="h1">About me</Typography>
          <Typography variant="body1" textAlign="justify">
            {t("about.description")}
          </Typography>
          <Stack direction="row" spacing={4}>
            <Button variant="contained">{t("about.cv")}</Button>
            <Button variant="contained">{t("about.projects")}</Button>
          </Stack>
        </Stack>
      </Grid>
    </Root>
  );
};

export default About;
