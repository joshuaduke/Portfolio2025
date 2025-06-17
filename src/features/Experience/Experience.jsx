import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JobDescription from "./JobDescription";

JobDescription.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const Experience = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="" id="experience">
			<h2 className="text-2xl pt-20 pb-14 md:text-4xl">// experience</h2>
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: "",
					display: "flex",
					maxHeight: 650,
				}}
				className="flex-col md:flex-row"
			>
				<Tabs
					orientation="vertical"
					// variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{
						borderRight: 1,
						borderColor: "divider",
					}}
				>
					{experienceArr.map((job, index) => (
						<Tab
							label={job.location}
							{...a11yProps(index)}
							className="text-text"
						/>
					))}
				</Tabs>
				{experienceArr.map((job, index) => (
					<JobDescription value={value} index={index} job={job} />
				))}
			</Box>
		</div>
	);
};

export default Experience;


const experienceArr = [
  {
    location: "reSolved Business Solutions",
    title: "Software Developer",
    startDate: "April 2022",
    endDate: "",
    description: ["Built and maintained customized web solutions on the SmartSimple platform using JavaScript, HTML, CSS, and jQuery, aligning with specific client needs.", "Led internal Quality Assurance (QA) efforts by identifying and resolving issues prior to User Acceptance Testing (UAT), ensuring stable and reliable releases.", "Participated in agile project meetings, client requirement analysis, and UI/UX design reviews to ensure successful project delivery."]
  },
    {
    location: "Toronto District School Board",
    title: "Web Developer Intern",
    startDate: "January 2020",
    endDate: "August 2020",
    description: ["Enforced accessibility rules over 500 TDSB web pages by applying AODA compliance in accordance with WCAG 2.0 standards", "Converted TDSB’s old intranet websites to modern responsive websites using html5, css3, js and Bootstrap 4 following TDSB’s web guidelines"]
  },
]