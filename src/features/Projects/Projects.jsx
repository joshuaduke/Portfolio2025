import React from 'react'

import Project from './Project';

const Projects = () => {
	return (
		<div>
			<h2 className="text-2xl pt-20 pb-14 md:text-4xl">
				// personal projects
			</h2>

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

			<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
			"Honestly, I got tired of tracking my spending in a google sheet. J-Finance is my personal finance tracker app. I can visualize spending habits, add expenses, set budgets and savings goals.",
		tools: ["React.js", "TailwindCSS", "MongoDB", "Node.js"],
		githubLink: "https://github.com/joshuaduke/JFinance_2025",
		liveLink: "https://j-finance.netlify.app/",
	},
	// {
	// 	name: "J-Movies",
	// 	description:
	// 		"Popular movie visualizer, see what is releasing soon and what common movies people are searching for. Might find your next watch!",
	// 	tools: ["React.js", "TailwindCSS", "AppWrite"],
	// 	githubLink: "https://github.com/joshuaduke/JMovies-2025",
	// 	liveLink: "https://maroon-coyote-770037.hostingersite.com/",
	// },
	{
		name: "Arithmetic Hero",
		description:
			"A fun application for children to practice their basic arithmetic skills. With their favourite heroes!",
		tools: ["HTML", "JavaScript", "SCSS"],
		githubLink: "https://github.com/joshuaduke/SuperHeroMathGameV2",
		liveLink: "https://joshuaduke.github.io/SuperHeroMathGameV2/",
	},
	{
		name: "RPSLS",
		description:
			"Rock Paper Scissors Lizard Spock! Rock, Paper, Scissors BUT! The version featured on The Big Bang Theory",
		tools: ["HTML", "JavaScript", "CSS"],
		githubLink: "https://github.com/joshuaduke/Rock-Paper-Scissors-GUI",
		liveLink: "https://joshuaduke.github.io/Rock-Paper-Scissors-GUI/",
	},
];