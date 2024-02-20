import React, { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

import MobileMenu from "../NavMenu/MobileMenu";
import SocialMedia from "../SocialMedia/SocialMedia";

import Logo from "../../assets/mobile-logo.png";

import {
	MobileHeader,
	Button,
	MenuContainer,
	SignIn,
	SecondaryMenu,
	MobileAction,
	Hamburger,
} from "./Header.styled";

let SceeenSize = screen.height;

const MobileHeaderArea = () => {
	const [toggle, setToggle] = useState(false);

	const MenuToggleHandler = () => {
		setToggle(!toggle);
	};

	return (
		<MobileHeader>
			<MobileAction>
				<Hamburger>
					<Button onClick={MenuToggleHandler}>
						{toggle ? <X /> : <Menu />}
					</Button>
				</Hamburger>
				<div className="site-logo">
					<img src={Logo} alt="" />
				</div>
				<Button>
					<Search size={16} />
				</Button>
			</MobileAction>
			<MenuContainer
				style={{
					height: SceeenSize,
					width: toggle ? "370px" : "0",
					zIndex: toggle ? "999" : "0",
					display: toggle ? "block" : "none",
					overflow: toggle ? "auto" : "hidden",
				}}
			>
				<MobileMenu />
				<SecondaryMenu>
					<SignIn>
						<a href="#">
							<User size={16} /> <span>sign in</span>
						</a>
					</SignIn>
					<SocialMedia />
				</SecondaryMenu>
			</MenuContainer>
		</MobileHeader>
	);
};

export default MobileHeaderArea;
