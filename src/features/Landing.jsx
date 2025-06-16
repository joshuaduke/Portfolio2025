import EmailIcon from "@mui/icons-material/Email";

const Landing = () => {
	return (
		<main className="mt-24 text-center h-fit">
			<h1 className="text-4xl my-2 text-accent">Joshua Duke</h1>
			<p className="text-lg my-2">I create stuff sometimes.</p>
			<p className="text-sm">
				I'm a software engineer from Toronto, Canada. I'm fascinated by
				large-scale, high-impact products and contributed to major
				feature launches in industry-leading services as well as apps
				that have 100M+ installs.
			</p>
			<a
				href="mailto:joshuadukedev@gmail.com"
				className="accent-color inline-block border border-blue-500 rounded-sm py-3 px-6 my-6"
			>
				<EmailIcon className="text-accent" />
				Say hi!
			</a>
		</main>
	);
};

export default Landing;
