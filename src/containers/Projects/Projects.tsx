import { Grid, styled } from "@mui/material";
import React from "react";
import { ProjectList } from "../../const/ProjectsConst";
import ProjectCard from "../../components/ProjectCard";
import { type GridProps } from "@mui/material/Grid";

interface RootProps extends GridProps {}

const Root = styled(Grid)<RootProps>(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.primary.main,
  padding: 20
}));

function Projects() {
  return (
    <Root container spacing={{xs: 4, md: 4, lg: 8}}>  
        { ProjectList.map(project => {
        return <Grid item xs={12} md={4} lg={3}>
          <ProjectCard imgPath={project.imgPath ?? './imgs/thumbnail/placeholder.png'} name={project.name} githubLink={project.githubLink} demoLink={project.demoLink}/>
        </Grid>
        })}
    </Root>
  );
}

export default Projects;
