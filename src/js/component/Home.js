import React from "react";
import { Navbar } from "../component/Navbar.js";
import { Body } from "../component/Body.js";
import { Jumbotron } from "../component/Jumbotron.js";
import { Card } from "../component/Card.js";
import { Footer } from "../component/Footer.js";

export function Home() {
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
