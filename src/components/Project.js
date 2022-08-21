import React from 'react';
import './Project.scss';
import {ImGithub, ImLink} from 'react-icons/im';

const Project = (props) => {
  return (
    <div className="project">
        <div>
            <img src={props.imgPath} alt={props.name}/>
        </div>
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><ImGithub/> Github</a>
        <a href={props.demoLink} target="_blank" rel="noopener noreferrer"><ImLink/> Demo</a>
    </div>
  )
}

export default Project;
