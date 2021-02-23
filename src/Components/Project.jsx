import React, { useState, useEffect } from "react";

const Project = (props) => {
	const [projects, setProject] = useState([
		{
			name: "Dog Meet Dog",
			description:
				"Dog Meet Dog is a social media app for dogs to connect with other dogs, because your pup needs a furever friend too. This app was built using primarily Handlebars and server-side routing.",
			url: "https://gentle-sea-84823.herokuapp.com/",
			github: "https://github.com/jeanarose/dog-meet-dog",
		},
		{
			name: "Visualize",
			description:
				"Visualize is a vision board generator designed to guide the user towards their goals and provide images to choose from. Visualize utilized jQuery and DOM manipulation.",
			url: "https://jeanarose.github.io/vision-board/",
			github: "https://github.com/jeanarose/vision-board",
		},
		{
			name: "Weather Dashboard ",
			description:
				"Weather Dashboard is a dynamic jQuery app designed to display the forecast for the current day and the next five days of a city that the user searches. The application stores the user's recently searched cities into local storage and displays them on the left-hand side. The user can simply click on the recently searched cities to view the weather for each city.",
			url: "https://jeanarose.github.io/weather-dashboard",
			github: "https://github.com/jeanarose/weather-dashboard",
			id: "123p90d02kd023wef089",
		},
		{
			name: "Password Generator",
			description:
				"Password Generator was created to generate a random password when the button Generate Password is clicked. The password is dependent on answers to a series of prompts that the user receives when the button is clicked.",
			url: "https://jeanarose.github.io/password-generator",
			github: "https://github.com/jeanarose/password-generator",
		},
		{
			name: "Code Quiz",
			description:
				"Code Quiz is here to test users' coding knowledge. At the start of a button, the user is given a timed quiz that displays one question at a time. Code Quiz was designed to be a dynamic JavaScript application.",
			url: "https://jeanarose.github.io/code-quiz",
			github: "https://github.com/jeanarose/code-quiz",
		},
		{
			name: "Burger Logger",
			description:
				"Burger Logger is a fun app to keep track of burgers that have been devoured and burgers that have yet to be devoured. This app is a simple representation of the usefulness of a model-view controller (MVC). ",
			url: "https://dry-anchorage-08139.herokuapp.com/",
			github: "https://github.com/jeanarose/burger-logger",
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
