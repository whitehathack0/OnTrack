import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { EmployeeHomepage } from "./";

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

class Employee extends React.Component{
	render() {
		return (
			<BrowserRouter>
				<Route path="/Employee" exact component={EmployeeHomepage} />
			</BrowserRouter>
		);
	}
}

export default Employee;