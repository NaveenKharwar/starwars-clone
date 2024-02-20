import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { Search, User } from "lucide-react";

import DesktopMenu from "../NavMenu/DesktopMenu";
import SocialMedia from "../SocialMedia/SocialMedia";

import { DesktopHeader } from "./Header.styled";

const PrimaryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: self-start;
`;

const DesktopLogo = styled.a`
	display: block;
	img {
		height: 80px;
	}
`;

const SecondaryMenu = styled.div`
	margin-top: 18px;
	ul {
		list-style: none;
		padding: 0;
		display: inline-flex;
		align-items: center;
		column-gap: 20px;
		a {
			color: white;
			font-size: 16px;
			text-transform: uppercase;
			display: flex;
			column-gap: 6px;
			align-items: center;
		}
	}
`;

const NavContainer = styled.div`
	border-bottom: 1px #48494a solid;
`;

const DesktopHeaderArea = () => {
	return (
		<>
			<DesktopHeader>
				<Container>
					<PrimaryHeader>
						<SocialMedia />
						<DesktopLogo href="#">
							<img src="/images/full-logo.png" alt="logo" />
						</DesktopLogo>
						<SecondaryMenu>
							<ul>
								<li>
									<a href="#">
										<Search size={16} /> <span>search</span>
									</a>
								</li>
								<li>
									<a href="#">
										<User size={16} /> <span>sign in</span>
									</a>
								</li>
							</ul>
						</SecondaryMenu>
					</PrimaryHeader>
				</Container>
				<NavContainer>
					<DesktopMenu />
				</NavContainer>
			</DesktopHeader>
		</>
	);
};

export default DesktopHeaderArea;
