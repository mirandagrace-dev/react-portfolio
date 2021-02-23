import React, { useEffect } from "react";
import Project from "../Components/Project";

const Portfolio = (props) => {
	useEffect(() => {
		document.title = "Portfolio";
	});
	return (
		<>
			<section className="hero is-small is-primary has-text-centered">
				<div id="portfolio-hero" className="hero-body">
					<h1 className="title is-size-1">Portfolio</h1>
				</div>
			</section>
			<Project {...props} key={props.id} />
		</>
	);
};

export default Portfolio;
