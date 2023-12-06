import { Grid, styled, Box, Typography, Stack } from "@mui/material";
import React from "react";
import { ProjectList } from "../../const/ProjectsConst";
import ProjectCard from "../../components/ProjectCard";
import { type BoxProps } from "@mui/material/Box";
import { useTranslation } from "react-i18next";

interface RootProps extends BoxProps {}

const Root = styled(Box)<RootProps>(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
  boxSizing: 'border-box',
  minHeight: '100vh',
  background: theme.palette.primary.main,
  '.pj-container': {
    width: 'fit-content'
  }
}));

function Projects() {
  const { t } = useTranslation();
  return (
    <Root>
      <Stack spacing={4}>
        <Typography variant="h1" textAlign="center">{t("projects.title")}</Typography>
        <Grid container spacing={{xs: 4, sm:4, md: 4, lg: 6}} className="pj-container"> 
            { ProjectList.map(project => {
            return <Grid item xs={12} sm={6} md={4}>
              <ProjectCard imgPath={project.imgPath ?? './imgs/thumbnail/placeholder.png'} name={project.name} githubLink={project.githubLink} demoLink={project.demoLink}/>
            </Grid>
            })}
        </Grid>
      </Stack>
    </Root>
  );
}

export default Projects;
