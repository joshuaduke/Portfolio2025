import React from "react";

const JobDescription = (props) => {
	const { children, value, index, job, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
		>
			{value === index && (
				<div className="relative left-6">
					<div>
						{/* <h2>{job.location}</h2> */}
						<h4 className="font-bold md:text-2xl">
							{job.title} @{" "}
							<span className="text-accent">{job.location}</span>
						</h4>
						<p className="opacity-70">
							{job.startDate} -{" "}
							{job.endDate != "" ? job.endDate : "PRESENT"}
						</p>
						<ul className="text-text list-disc px-8 relative top-4 marker:text-accent">
							{job.description.map((item) => (
								<li className="md:leading-8 md:py-2">{item}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default JobDescription;
