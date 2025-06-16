import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
	const github = GitHubIcon;
	return (
		<nav className="py-3">
			<ul className="flex justify-end gap-3">
				<li className="">
					<a href="https://github.com/joshuaduke" target="_blank">
						<GitHubIcon />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/joshua-duke/"
						target="_blank"
					></a>
					<LinkedInIcon />
				</li>
				<li>
					<a href="mailto:joshuadukedev@gmail.com">
						<EmailIcon />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
