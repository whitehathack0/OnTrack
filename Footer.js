import React from "react";
import styled from "styled-components";

const ScFooter = styled.footer`
	text-align: center;
	bottom: 0;
	padding-top: 40px; 
`;

function Footer() {
	return (
		<ScFooter>
			<p>Made with {`<3`} by Miberty Lutual</p>
		</ScFooter>
);
}

export default Footer;
