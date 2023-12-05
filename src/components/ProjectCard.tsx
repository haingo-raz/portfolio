import React from 'react';
import { styled, Stack, Button, CardActions, CardMedia  } from "@mui/material";
import Card, { type CardProps } from '@mui/material/Card';
import {ImGithub, ImLink} from 'react-icons/im';
import { imgPlaceholder } from '../const/ProjectsConst';

interface ProjectCardProps {
 imgPath: string
 name: string
 githubLink?: string
 demoLink?: string
}

const Root = styled(Card)<CardProps>(({theme}) => ({
  ".project": {

  },
}))

const ProjectCard = (props: ProjectCardProps) => {
  return (
      <Root className="project">
          <CardMedia
            sx={{ height: 200 }}
            image={props.imgPath === '/' ? imgPlaceholder : props.imgPath}
            title={props.name}
          />
          <CardActions>
            <Stack justifyContent="space-around" direction="row" width={'100%'}>
              <Button variant="contained" onClick={() => window.location.href=props.githubLink ?? ''}> <ImGithub/> Github </Button>
              <Button variant="contained" onClick={() => window.location.href=props.demoLink ?? ''}> <ImLink/> Demo </Button>
            </Stack>
          </CardActions>
      </Root>
  )
}

export default ProjectCard

