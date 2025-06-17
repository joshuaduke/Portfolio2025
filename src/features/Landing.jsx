import EmailIcon from "@mui/icons-material/Email";

const Landing = () => {
	return (
		<main className="mt-30 text-center md:h-screen md:place-content-center md:mt-0">
			<h1 className="text-4xl my-4 text-text leading-17 md:text-6xl md:my-0 md:leading-20">
				Hello there! I'm <br />
				<span className="p-2 bg-accent font-bold rounded-md">
					Joshua Duke
				</span>
			</h1>
			<p className="text-xl my-2 md:text-4xl md:my-6">
				I like to create things.
			</p>
			<p className="leading-10 md:w-[80%] md:mx-auto">
				I'm a Software Developer based in Toronto, Canada. I mainly
				specialize on the Frontend with aspirations to becoming a
				Fullstack Developer. I'm always exploring new challenges and
				opportunities to grow, constantly learning and finding creative
				ways to solve problems.
			</p>
			<a
				href="mailto:joshuadukedev@gmail.com"
				className="accent-color inline-block border border-blue-500 rounded-sm py-3 px-6 my-6 md:py-5"
			>
				<EmailIcon className="text-accent mr-1 mb-1" />
				Let's talk
			</a>
		</main>
	);
};

export default Landing;
