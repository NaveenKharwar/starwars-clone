import React from "react";
import styled from "styled-components";

const NotchPosition = 14;

const NotchContainer = styled.div`
	background: transparent;
	position: absolute;
	bottom: 0;
	width: 100%;
	& {
		position: absolute;
		bottom: -${NotchPosition}px;
		height: ${NotchPosition}px;
		left: 0;
		width: 100%;
		display: block;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		top: auto;
		border-top: ${NotchPosition}px solid #1d1e1f;
		border-right: ${NotchPosition}px solid transparent;
		width: 50%;
		box-sizing: border-box;
	}

	&::before {
		content: "";
		position: absolute;
		right: 0;
		bottom: 0;
		top: auto;
		border-top: ${NotchPosition}px solid #1d1e1f;
		border-left: ${NotchPosition}px solid transparent;
		width: 10%;
	}
`;

const Notch = () => {
	return <NotchContainer className="notch"></NotchContainer>;
};

export default Notch;
