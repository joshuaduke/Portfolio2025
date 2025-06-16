import React from 'react'
import LabelIcon from '@mui/icons-material/Label';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = ({ data }) => {
	const { name, description, tools, githubLink, liveLink } = data;
	return (
		<div
			id="project-card"
			className="bg-secondary flex flex-col  bg-blue-900 rounded-xl px-5 pt-6 pb-10 "
		>
			<div className="flex justify-between py-4" id="project-header">
				<LabelIcon className="text-accent" sx={{ fontSize: 35 }} />
				<div>
					<a
						target="_blank"
						href={githubLink}
						className="text-white pr-2"
					>
						<GitHubIcon />
					</a>
					<a target="_blank" href={liveLink} className="text-white ">
						<OpenInNewIcon />
					</a>
				</div>
			</div>
			<h4 className="text-white font-bold text-xl pb-3">{name}</h4>
			<p className="pb-10">{description}</p>
			<p>{tools.map((tool) => tool + ",")}</p>
		</div>
	);
};

export default Project;

