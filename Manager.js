import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ManagerHomepage, ManagerDashboard } from "./";

const teams = [
	{
		name: "Team A"
	},
	{
		name: "Team B"
	},
	{
		name: "Team C"
	}
];

class Manager extends React.Component{
	render() {
		return (
			<BrowserRouter>
				<Route path="/Manager/Dashboard" component={ManagerDashboard} />
				<Route path="/Manager" exact component={ManagerHomepage} />
			</BrowserRouter>
		);
	}
}

export default Manager;