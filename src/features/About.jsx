import React from 'react'

const About = () => {
  return (
		<div>
			<h2 className="text-2xl pt-20 pb-14">// about me</h2>

			<p>
				I am currently a <strong>Developer</strong> at{" "}
				<a
					target="_blank"
					className="accent-color font-bold"
					href="https://re-solved.ca/who-we-are/why_resolved/"
				>
					reSolved Business Solutions
				</a>
				. I am also a graduate of{" "}
				<a
					target="_blank"
					className="accent-color font-bold"
					href="https://www.senecapolytechnic.ca/programs/fulltime/CPA.html"
				>
					Seneca College
				</a>
				's <strong>Computer Programming & Analysis</strong> program. I
				currently am undertaking a part-time{" "}
				<strong>Bachelor of Science</strong> degree in{" "}
				<strong>Computer Science</strong> at{" "}
				<a
					target="_blank"
					className="accent-color font-bold"
					href="https://www.torontomu.ca/programs/undergraduate/computer-science/"
				>
					Toronto Metropolitan University
				</a>
				.
			</p>

			<p className="my-4">
				Here are some technologies that I have been working with:
			</p>
			<ul className="text-text grid grid-cols-2 list-disc marker:text-accent px-4">
				<li>React.js</li>
				<li>Javascript ES6+</li>
				<li>Node.js</li>
				<li>MongoDB</li>
				<li>TailwindCSS</li>
				<li>MySQL</li>
			</ul>

			<p className="my-4">
				Here are some technologies that I am currently interested in
				learning:
			</p>
			<ul className="text-text grid grid-cols-2 list-disc marker:text-accent px-4">
				<li>Python</li>
				<li>Typescript</li>
				<li>AWS</li>
				<li>React Native</li>
				<li>Docker</li>
			</ul>

			<p className="my-4">
				Outside of work, I'm interested in following the developments of
				science and technology. I also read, play a lot of video games.
				And some sports 🏀.
			</p>
		</div>
  );
}

export default About