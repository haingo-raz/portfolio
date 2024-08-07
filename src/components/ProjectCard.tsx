import React from "react";
import {
  styled,
  Stack,
  Button,
  CardActions,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Card, { type CardProps } from "@mui/material/Card";
import { ImGithub, ImLink } from "react-icons/im";
import { IoDocumentTextSharp } from "react-icons/io5";
import { imgPlaceholder } from "../const/ProjectsConst";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';
import chip_color from "../const/ChipColor";

ReactGA.initialize('G-QS5EL5K0C5');

interface ProjectCardProps {
  id: string;
  languages: string[];
  imgPath: string;
  name: string;
  githubLink?: string;
  demoLink?: string;
  onDialogOpen: (project: any) => void;
}

const Root = styled(Card)<CardProps>(({ theme }) => ({
  padding: theme.spacing(1),
  minWidth: 235
}));

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();
  const handleGithubButtonClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Github Button Clicked",
      label: props.name,
    });
    window.open(props.githubLink ?? "", "_blank");
  };

  const handleDemoButtonClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Demo Button Clicked",
      label: props.name,
    });
    window.open(props.demoLink ?? "", "_blank");
  };

  const handleDocsButtonClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Docs Button Clicked",
      label: props.name,
    });
    props.onDialogOpen(props.id);
  };

  return (
    <Root>
      <Stack py={1}>
        <Typography variant="h5">{props.name}</Typography>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ overflowX: "auto", minHeight: 48 }}>
        {props.languages.map((language, index) => {
          return (
            <Chip
              key={index}
              label={language}
              style={{ backgroundColor: chip_color[language] ?? chip_color["Default"] }}
            />
          );
        })}
      </Stack>
      <CardMedia
        sx={{ height: 180 }}
        image={props.imgPath === "/" ? imgPlaceholder : props.imgPath}
        title={props.name}
      />
      <CardActions>
        <Stack justifyContent="space-around" direction="row" width={"100%"}>
          {props.githubLink === "/" ? (
            <></>
          ) : (
            <Button
              variant="contained"
              onClick={handleGithubButtonClick}
              disabled={props.githubLink === "/"}
            >
              <ImGithub /> {t("projects.github")}
            </Button>
          )}
          {props.demoLink === "/" ? (
            <Button variant="contained" onClick={handleDocsButtonClick}>
              <IoDocumentTextSharp /> {t("projects.docs")}{" "}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleDemoButtonClick}
            >
              <ImLink /> {t("projects.demo")}{" "}
            </Button>
          )}
        </Stack>
      </CardActions>
    </Root>
  );
};

export default ProjectCard;