//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your owsn components
import App from "./component/Home.js";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
