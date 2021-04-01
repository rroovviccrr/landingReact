import React from "react";
import { Navbar } from "./Navbar.js";
import { Body } from "./Body.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import { Footer } from "./Footer.js";

function Home() {
	return (
		<div>
			<Navbar />
			<Body />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
export default Home;
