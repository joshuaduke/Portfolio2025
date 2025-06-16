import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
	const github = GitHubIcon;
	return (
		<nav className="py-3 fixed top-0 right-0 left-0 pr-6 bg-primary z-40">
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
