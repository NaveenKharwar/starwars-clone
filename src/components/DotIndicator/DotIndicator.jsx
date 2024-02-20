import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
	display: flex;
	gap: 10px;
	width: 10%;
	& {
		position: absolute;
		top: 12px;
		left: 12px;
	}
`;

const Line = styled.div`
	flex: 8;
	background: #5a5c5d;
	height: 5px;
	border-radius: 8px;
`;

const Dot = styled(Line)`
	flex: 2;
`;

const DotIndicator = () => {
	return (
		<Indicator className="dot-indicator">
			<Line />
			<Dot />
		</Indicator>
	);
};

export default DotIndicator;
