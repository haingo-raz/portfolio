import React from 'react';
import { styled, Stack, Button, CardActions, CardMedia  } from "@mui/material";
import Card, { type CardProps } from '@mui/material/Card';
import {ImGithub, ImLink} from 'react-icons/im';
import { imgPlaceholder } from '../const/ProjectsConst';
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
 imgPath: string
 name: string
 githubLink?: string
 demoLink?: string
}

const Root = styled(Card)<CardProps>(({theme}) => ({
  
}))

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
      <Root>
          <CardMedia
            sx={{ height: 200 }}
            image={props.imgPath === '/' ? imgPlaceholder : props.imgPath}
            title={props.name}
          />
          <CardActions>
            <Stack justifyContent="space-around" direction="row" width={'100%'}>
              <Button variant="contained" onClick={() => window.location.href=props.githubLink ?? ''} disabled={props.githubLink === '/'}> <ImGithub/> {t("projects.github")}</Button>
              <Button variant="contained" onClick={() => window.location.href=props.demoLink ?? ''} disabled={props.demoLink === '/'}> <ImLink/> {t("projects.demo")} </Button>
            </Stack>
          </CardActions>
      </Root>
  )
}

export default ProjectCard

