import React from 'react'

import Project from './Project';

const Projects = () => {
	return (
		<div>
			<h2 className="text-2xl pt-20 pb-14">// personal projects</h2>

			{/* <div id='project-card'>
            <div className='flex justify-between' id='project-header'>
                <LabelIcon />
                <div>
                    <a target='_blank' href=""><GitHubIcon/></a>
                    <a target='_blank' href=""><OpenInNewIcon/></a>
                </div>
            </div>
            <h4>J-Finance</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sit debitis cum odit perferendis voluptatum pariatur ab a nihil error!</p>
            <p>tag, tag, tag</p>
        </div> */}

			<div className="grid gap-3 md:grid-cols-3">
				{projectsData.map((item) => (
					<Project data={item} />
				))}
			</div>
		</div>
	);
};

export default Projects;

const projectsData = [
	{
		name: "J-Finance",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi mollitia eveniet quasi itaque enim pariatur libero atque dolores labore, unde veritatis, omnis odio impedit alias maiores, exercitationem accusantium numquam amet a ut!",
		tools: ["React.js", "TailwindCSS", "MongoDB", "Node.js"],
		githubLink: "https://github.com/joshuaduke/JFinance_2025",
		liveLink: "https://stellular-frangipane-2b6210.netlify.app/signIn",
	},
	{
		name: "J-Movies",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi mollitia eveniet quasi itaque enim pariatur libero atque dolores labore, unde veritatis, omnis odio impedit alias maiores, exercitationem ",
		tools: ["React.js", "TailwindCSS", "AppWrite"],
		githubLink: "https://github.com/joshuaduke/JMovies-2025",
		liveLink: "https://maroon-coyote-770037.hostingersite.com/",
	},
	{
		name: "Arithmetic Hero",
		description:
			"Excepturi modi mollitia eveniet quasi itaque enim pariatur libero atque dolores labore, unde veritatis, omnis odio impedit alias maiores, exercitationem accusantium",
		tools: ["HTML", "JavaScript", "SCSS"],
		githubLink: "https://github.com/joshuaduke/SuperHeroMathGameV2",
		liveLink: "https://joshuaduke.github.io/SuperHeroMathGameV2/",
	},
	{
		name: "Arithmetic Hero",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi mollitia eveniet quasi itaque enim pariatur libero atque dolores labore, unde veritatis, omnis odio impedit alias maiores, exercitationem accusantium",
		tools: ["HTML", "JavaScript", "SCSS"],
		githubLink: "https://github.com/joshuaduke/SuperHeroMathGameV2",
		liveLink: "https://joshuaduke.github.io/SuperHeroMathGameV2/",
	},
	{
		name: "Arithmetic Hero",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi mollitia eveniet quasi itaque enim pariatur libero atque dolores labore, unde veritatis, omnis odio impedit alias maiores, exercitationem accusantium",
		tools: ["HTML", "JavaScript", "SCSS"],
		githubLink: "https://github.com/joshuaduke/SuperHeroMathGameV2",
		liveLink: "https://joshuaduke.github.io/SuperHeroMathGameV2/",
	},
	{
		name: "RPSLS",
		description: "Rock Paper Scissors Lizard Spock! ",
		tools: ["HTML", "JavaScript", "CSS"],
		githubLink: "https://github.com/joshuaduke/Rock-Paper-Scissors-GUI",
		liveLink: "https://joshuaduke.github.io/Rock-Paper-Scissors-GUI/",
	},
];