import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { analytics } from "../config/firebase-config";
import { logEvent } from "firebase/analytics";

const Navbar = () => {
	function handleclick(event) {
		console.log("Clicked", event.currentTarget.id);
		logEvent(analytics, event.currentTarget.id);
	}

	return (
		<nav className="w-full py-3 fixed top-0 right-0 left-0 px-6 bg-primary z-40">
			<div className=" md:flex md:justify-between md:py-6 lg:w-[80%] lg:mx-auto 2xl:w-[50%]">
				<ul className="hidden md:gap-4 md:flex lg:text-lg">
					<li className="text-xl">Joshua Duke</li>
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
				<ul className="flex justify-end gap-3 icon-color lg:text-lg">
					<li className="">
						<a
							href="https://github.com/joshuaduke"
							target="_blank"
							id="githubLink"
							onClick={handleclick}
						>
							<GitHubIcon sx={{ fontSize: 20 }} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/joshua-duke/"
							target="_blank"
							id="linkedinLink"
							onClick={handleclick}
						>
							<LinkedInIcon sx={{ fontSize: 20 }} />
						</a>
					</li>
					<li>
						<a
							href="mailto:joshuadukedev@gmail.com"
							id="mailLink"
							onClick={handleclick}
						>
							<EmailIcon sx={{ fontSize: 20 }} />
						</a>
					</li>
					{/* <li>
						<a
							target="_blank"
							href="/src/assets/joshuaduke_resume_2025.pdf"
							id="resumeLink"
							onClick={handleclick}
						>
							Resume
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
