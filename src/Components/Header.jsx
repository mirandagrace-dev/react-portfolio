import React from "react";

const Header = (props) => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<a
				role="button"
				className="navbar-burger mr-0"
				onClick={() =>
					document.querySelector(".navbar-menu").classList.toggle("is-active")
				}
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
			<div id="navbarBasicExample" className="navbar-menu has-background-dark">
				<div className="navbar-start ml-0 mt-2">
					<div className="social-media has-text-right">
						<a
							href="https://www.linkedin.com/in/mirandagrace-dev/"
							target="_blank"
						>
							<i className="fab fa-linkedin fa-lg navbar-item is-size-3 has-text-light"></i>
						</a>
						<a href="https://github.com/mirandagrace-dev" target="_blank">
							<i className="fab fa-github fa-lg navbar-item is-size-3 has-text-light"></i>
						</a>
					</div>
				</div>
				<div className="navbar-end mr-0">
					<a
						href="/portfolio/#/"
						className="navbar-item has-text-right has-text-light"
					>
						Home
					</a>

					<a
						href="/portfolio/#/portfolio"
						className="navbar-item has-text-right has-text-light"
					>
						Portfolio
					</a>
					<a
						href="/portfolio/#/contact"
						className="navbar-item has-text-right has-text-light"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
