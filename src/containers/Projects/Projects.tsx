import { Grid, styled, Box, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProjectList } from "../../const/ProjectsConst";
import ProjectCard from "../../components/ProjectCard";
import { type BoxProps } from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CustomDialog from "../../components/Dialog";
import MultipleSelectChip from "../../components/MultiSelectChip";
import { SelectChangeEvent } from '@mui/material/Select';

interface RootProps extends BoxProps {}

const Root = styled(Box)<RootProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  boxSizing: "border-box",
  minHeight: "100vh",
  background: theme.palette.primary.main,
  ".pj-container": {
    width: "fit-content",
    marginBottom: theme.spacing(2),
  },
}));

function Projects() {
  const { t } = useTranslation();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [chipNameValue, setChipNameValue] = React.useState<string[]>([]);

  useEffect(() => {
    console.log('chipNameValue', chipNameValue);
  })

  const handleChange = (event: SelectChangeEvent<typeof chipNameValue>) => {
    const {
      target: { value },
    } = event;
    setChipNameValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDialogOpen = (project: any) => {
    setCurrentProject(project);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setCurrentProject(null);
  };

  let allLanguages: string[] = ProjectList.filter(project => project.isDisplayed).map(project => project.languages).flat();
  let uniqueLanguages: string[] = allLanguages.filter((value, index, self) => self.indexOf(value) === index).sort();
  
  return (
    <Root id="projects">
      <Stack spacing={1} alignItems="center">
        <Typography variant="h1" textAlign="center">
          {t("projects.title")}
        </Typography>
        <MultipleSelectChip names={uniqueLanguages} chipNameValue={chipNameValue} handleChange={handleChange}/>
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 4, lg: 6 }}
          className="pj-container"
        >
          {ProjectList.filter(project => project.isDisplayed && (chipNameValue.length === 0 || chipNameValue.some(chip => project.languages.includes(chip)))).map((project, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard
                  id={project.id}
                  languages={project.languages}
                  imgPath={
                    project.imgPath ?? "./imgs/thumbnail/placeholder.png"
                  }
                  name={project.name}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  onDialogOpen={() => handleDialogOpen(project)}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box>
          <Button
            variant="text"
            onClick={() =>
              window.open(
                "https://github.com/haingo-raz?tab=repositories",
                "_blank",
              )
            }
          >
            {t("projects.otherProjects")} <OpenInNewIcon />{" "}
          </Button>
        </Box>
      </Stack>
      {currentProject && (
        <CustomDialog
          isOpen={isDialogOpen}
          handleClose={handleDialogClose}
          title={currentProject.name}
          description={currentProject.description}
          content={currentProject.content?.map((item: any) => (
            <Box key={item.order}>
              {item.type === "p" && <Typography>{item.text}</Typography>}
              {item.type === "title" && <Typography variant="h5">{item.text}</Typography>}
              {item.type === "ul" && 
              <ul>
                {item.text.map((text: string) => {
                  return <li>{text}</li>
                })}
              </ul>}
            </Box>
          ))}
        />
      )}
    </Root>
  );
}

export default Projects;
