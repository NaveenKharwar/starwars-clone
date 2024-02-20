import React, { useState } from "react";
import MenuItems from "./MenuItems";

import { ChevronDown } from "lucide-react";
import styled from "styled-components";

const Nav = styled.nav`
	padding: 30px 40px;
	padding-left: 80px;
	text-transform: uppercase;
	ul {
		display: flex;
		flex-direction: column;
	}
	.sub-menu,
	.open-sub-menu {
		margin-left: 20px;
	}
	.sub-menu {
		margin-top: 30px;
		display: none;
		gap: 30px;
	}
	.open-sub-menu {
		display: flex;
	}
	.has-submenu:has(.open-sub-menu) {
		svg {
			transition: all 0.25s;
			transform: rotate(180deg);
		}
	}
`;

const MenuList = styled.li`
	padding-block: 13px;
	position: relative;
	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.active {
		&::before {
			content: "";
			height: 24px;
			width: 2px;
			background-color: #f8f8f8;
			box-shadow: 0px 0px 4px 1px #fade4b;
			border-radius: 4px;
			position: absolute;
			margin: -2px -8px;
		}
	}
`;

const MobileMenu = () => {
	const [SubMenu, setSubMenu] = useState("sub-menu");
	const [MenuActive, setMenuActive] = useState("");

	const SubMenuHandler = (event, index) => {
		event.preventDefault();

		setSubMenu((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));

		setMenuActive((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};
	return (
		<>
			<Nav>
				<ul>
					{MenuItems.map((menu, index) => (
						<MenuList
							key={index}
							{...(menu.subitems && { className: "has-submenu" })}
						>
							<a
								href={menu.href}
								onClick={(event) => SubMenuHandler(event, index)}
								className={MenuActive[index] ? "active" : ""}
							>
								{menu.label}
								{menu.subitems && <ChevronDown />}
							</a>
							{menu.subitems && (
								<ul
									className={
										SubMenu[index] ? "sub-menu" : "open-sub-menu sub-menu"
									}
								>
									{menu.subitems.map((subitems, index) => (
										<li key={index}>
											<a href={subitems.href}>{subitems.label}</a>
										</li>
									))}
								</ul>
							)}
						</MenuList>
					))}
				</ul>
			</Nav>
		</>
	);
};

export default MobileMenu;
