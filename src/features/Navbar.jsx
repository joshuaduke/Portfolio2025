import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Navbar = () => {
  const github = GitHubIcon
  return (
    <div>
      <ul>

      </ul>
      <ul>
        <li><a href=""><GitHubIcon/></a></li>
        <li><a href=""></a><LinkedInIcon/></li>
        <li><a href=""><EmailIcon /></a></li>
      </ul>
    </div>
  )
}

export default Navbar