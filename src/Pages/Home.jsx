import React, { useEffect } from "react";

const Home = (props) => {
	useEffect(() => {
		document.title = "Home";
	});
	return (
		<section className="hero home-hero is-fullheight">
			<div className="hero-body has-text-centered">
				<div className="columns is-justify-content-center">
					<div className="column is-three-quarters hero-body">
						<p className="title home-title is-size-1 has-text-light hax-text-weight-bold">
							Hi, I'm Miranda.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
