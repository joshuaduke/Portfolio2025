import React from 'react'
import LabelIcon from '@mui/icons-material/Label';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = ({data}) => {
    const { name, description, tools, githubLink, liveLink } = data;
  return (
        <div id='project-card'>
            <div className='flex justify-between' id='project-header'>
                <LabelIcon />
                <div>
                    <a target='_blank' href={githubLink}><GitHubIcon/></a>
                    <a target='_blank' href={liveLink}><OpenInNewIcon/></a>
                </div>
            </div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>
                {tools.map( (tool) => tool + ',')}
            </p>
        </div>
  )
}

export default Project