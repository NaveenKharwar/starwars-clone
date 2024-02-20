import styled from "styled-components";
import { mediaQueries } from "../../utils/Breakpoints";

export const DesktopHeader = styled.header`
	background-color: ${(props) => props.theme.colors.black};
	position: relative;
	a {
		color: ${(props) => props.theme.colors.grey};

		&:hover {
			color: white;
		}
	}
	display: none;

	${mediaQueries("md")(`
  display: block;
`)}
`;

export const MobileHeader = styled(DesktopHeader)`
	display: block;
	position: relative;

	${mediaQueries("md")(`
  display: none;
`)}
`;

export const MenuContainer = styled.div`
	position: absolute;
	background-color: ${(props) => props.theme.colors.black};
`;

export const Button = styled.button`
	color: #fff;
	background-color: transparent;
	border: none;
	width: 50px;
	height: 50px;
`;

export const SecondaryMenu = styled.div`
	border-top: 1px solid #48494a;
	padding: 30px 40px;
	padding-left: 80px;
	display: flex;
	flex-direction: column;
	ul {
		margin-top: 50px;
		margin-bottom: 30px;
	}
`;

export const SignIn = styled.div`
	text-transform: uppercase;

	display: flex;
	align-items: center;
	a {
		color: white;
		display: flex;
		align-items: center;
		gap: 13px;
	}
`;

export const MobileAction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-block: 25px;
	padding-inline: 20px;
	border-bottom: 1px solid #48494a;
	img {
		width: 250px;
	}
`;

export const Hamburger = styled.div``;
