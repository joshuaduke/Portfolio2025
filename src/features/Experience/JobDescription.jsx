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
				<div>
					<div>
						<h2>{job.location}</h2>
						<h4>
							{job.title} @ {job.location}
						</h4>
						<p>
							{job.startDate} -{" "}
							{job.endDate != "" ? job.endDate : "PRESENT"}
						</p>
						<ul className="list-disc">
							{job.description.map((item) => (
								<li>{item}</li>
							))}
						</ul>
					</div>
				</div>
			)}
			{/* {value === index && (
				<div>
					<div>{children}</div>
				</div>
			)} */}
		</div>
	);
};

export default JobDescription;
