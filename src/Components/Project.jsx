import React, { useState, useEffect } from "react";

const Project = (props) => {
	const [projects, setProject] = useState([
		{
			name: "Visualize",
			description:
				"Visualize is a vision board generator designed to guide the user towards their goals and provide images to choose from. Visualize utilized jQuery and DOM manipulation.",
			url: "",
			github: "https://github.com/mirandagrace-dev/project-1",
		},
		{
			name: "Weather Dashboard ",
			description:
				"Weather Dashboard is a dynamic jQuery app designed to display the forecast for the current day and the next five days of a city that the user searches. The application stores the user's recently searched cities into local storage and displays them on the left-hand side. The user can simply click on the recently searched cities to view the weather for each city.",
			url: "",
			github: "",
		},
		{
			name: "Password Generator",
			description:
				"Password Generator was created to generate a random password when the button Generate Password is clicked. The password is dependent on answers to a series of prompts that the user receives when the button is clicked.",
			url: "",
			github: "https://github.com/mirandagrace-dev/hw03",
		},
	]);
	return (
		<>
			<div className="columns is-multiline is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mt-6">
				{projects.map((project) => (
					<div className="column is-12">
						{/* <FadeInSection> */}
						<div className="container">
							<div className="columns">
								<div className="column is-4">
									<h1 className="title is-size-3 mb-0">{project.name}</h1>
									<div className="columns mb-0">
										<div className="column is-4 mb-0">
											<hr className="mb-0" />
										</div>
									</div>
									<p className="mt-0 mb-3 pr-6">{project.description}</p>
									<a className="button" href={project.url}>
										Application
									</a>
									<a className="button ml-4" href={project.github}>
										GitHub
									</a>
								</div>
								<div className="column is-8">
									<img src={project.image} alt="" />
								</div>
							</div>
						</div>
						<hr className="main-hr" />
						{/* </FadeInSection> */}
					</div>
				))}
			</div>
		</>
	);
};

export default Project;
