import React, { useState } from "react";
import {
  styled,
  Stack,
  Button,
  CardActions,
  CardMedia,
  Chip,
  CardContent,
  Typography,
  Slide,
} from "@mui/material";
import Card, { type CardProps } from "@mui/material/Card";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import { ImGithub, ImLink } from "react-icons/im";
import { imgPlaceholder } from "../const/ProjectsConst";
import { useTranslation } from "react-i18next";
import { TransitionProps } from "@mui/material/transitions";

interface ProjectCardProps {
  id: string;
  languages: string[];
  imgPath: string;
  name: string;
  date: string;
  githubLink?: string;
  demoLink?: string;
}

const Root = styled(Card)<CardProps>(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => ({}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState<
    Record<string, boolean>
  >({});

  const openModal = (id: string) => {
    setIsProjectDetailsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

  const handleClose = () => {
    setIsProjectDetailsOpen((prevState) => ({
      ...prevState,
      [props.id]: false, // Close the specific dialog on close event
    }));
  };

  return (
    <>
      <Root onClick={() => openModal(props.id)}>
        <Stack direction="row" spacing={2}>
          {props.languages.map((language) => {
            return <Chip label={language} />;
          })}
        </Stack>
        <CardMedia
          className="card-media"
          sx={{ height: 180 }}
          image={props.imgPath === "/" ? imgPlaceholder : props.imgPath}
          title={props.name}
        />
        <CardContent>
          <Typography variant="h5">
            {props.name} - {props.date}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack justifyContent="space-around" direction="row" width={"100%"}>
            <Button
              variant="contained"
              onClick={() => (window.location.href = props.githubLink ?? "")}
              disabled={props.githubLink === "/"}
            >
              {" "}
              <ImGithub /> &nbsp; {t("projects.github")}
            </Button>
            <Button
              variant="contained"
              onClick={() => (window.location.href = props.demoLink ?? "")}
              disabled={props.demoLink === "/"}
            >
              {" "}
              <ImLink /> &nbsp; {t("projects.demo")}{" "}
            </Button>
          </Stack>
        </CardActions>
      </Root>
      <CustomDialog
        fullScreen
        open={isProjectDetailsOpen[props.id]}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Typography variant="h2">{props.name}</Typography>
        <Button onClick={handleClose}>Close</Button>
      </CustomDialog>
    </>
  );
};

export default ProjectCard;
