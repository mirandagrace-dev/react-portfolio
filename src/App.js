import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default App;
