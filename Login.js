import React from "react";
import styled from "styled-components";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ScSubmitButton = styled(Button)`
	margin: 0 auto;
	display: table;
`;

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.login = this.login.bind(this);
	}

	login(event) {
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
debugger;
		if (password == "" && username != "")
		{
			window.location = "/Employee";
		}
		else if (username != "" && password != "")
		{
			window.location = "/Manager";
		}
	}

	render() {
		return (
			<Row className="justify-content-md-center">
				<Col xs="12" lg="6">
					<Form>
						<Card>
							<Card.Header as="h5">Login to onTrack</Card.Header>
							<Card.Body>
								<Form.Group>
									<Form.Label>n-number</Form.Label>
									<Form.Control id="username" type="text" placeholder="n-number" />
								</Form.Group>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control id="password" type="password" placeholder="Password" />
								</Form.Group>
								<ScSubmitButton variant="primary" onClick={() => this.login()}>Login</ScSubmitButton>



							</Card.Body>
						</Card>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default Login;
