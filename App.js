import React from 'react';
import styled from "styled-components";
import { Header } from "./header";
import Footer from "./footer/Footer";
import { Login } from "./pages";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Manager } from './pages/Manager';
import { Employee } from './pages/Employee';

function App() {
	return (
		<Container>
			<Header />
			<BrowserRouter>
				<Route path="/Manager" component={Manager} />
				<Route path="/Employee" component={Employee} />
				<Route path="/" exact component={Login} />
			</BrowserRouter>
			<Footer />
		</Container>
	);
}

export default App;
