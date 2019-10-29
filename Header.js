import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const Title = styled.h1`
	font-size: 6em;
	text-align: center;
	color: turquoise;
	background-color: #ffffff;
	border-bottom: 4px solid #eee;

`;

function Header() {
	return (
		<Title>
			<img src={Logo} />
		</Title>
	);
}

export default Header
