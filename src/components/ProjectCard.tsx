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
}));

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <Root>
      <Stack py={1}>
        <Typography variant="h5">{props.name}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {props.languages.map((language, index) => {
          return <Chip key={index} label={language} />;
        })}
      </Stack>
      <CardMedia
        sx={{ height: 180 }}
        image={props.imgPath === "/" ? imgPlaceholder : props.imgPath}
        title={props.name}
      />
      <CardActions>
        <Stack justifyContent="space-around" direction="row" width={"100%"}>
          { props.githubLink === "/" ? <></> : 
            <Button
              variant="contained"
              onClick={() => window.open(props.githubLink ?? "", "_blank")}
              disabled={props.githubLink === "/"}
            >
              <ImGithub /> {t("projects.github")}
            </Button>
          }
          { props.demoLink === "/" ?
            <Button
              variant="contained"
              onClick={() => props.onDialogOpen(props.id)}
            >
              <IoDocumentTextSharp /> {t("projects.docs")}{" "}
            </Button>
            :
            <Button
              variant="contained"
              onClick={() => window.open(props.demoLink ?? "", "_blank")}
            >
              <ImLink /> {t("projects.demo")}{" "}
            </Button>
          }
        </Stack>
      </CardActions>
    </Root>
  );
};

export default ProjectCard;