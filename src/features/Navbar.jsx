import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
	const github = GitHubIcon;
	return (
		<nav className="py-3 fixed top-0 right-0 left-0 px-6 bg-primary z-40 md:flex md:justify-between md:py-6">
			<ul className="hidden md:gap-4 md:flex">
				<li className="text-lg">Joshua Duke</li>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
			</ul>
			<ul className="flex justify-end gap-3 icon-color">
				<li className="">
					<a href="https://github.com/joshuaduke" target="_blank">
						<GitHubIcon sx={{ fontSize: 20 }} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/joshua-duke/"
						target="_blank"
					>
						<LinkedInIcon sx={{ fontSize: 20 }} />
					</a>
				</li>
				<li>
					<a href="mailto:joshuadukedev@gmail.com">
						<EmailIcon sx={{ fontSize: 20 }} />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
