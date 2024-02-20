import React from "react";
import styled from "styled-components";
import MenuItems from "./MenuItems";

import { mediaQueries } from "../../utils/Breakpoints";

const PrimaryMenu = styled.nav`
	position: relative;
	ul {
		flex-direction: column;

		${mediaQueries("md")`
			flex-direction: row;
			`}

		display: flex;
		justify-content: center;
		column-gap: 60px;
		li {
			position: relative;
			padding-bottom: 25px;

			a {
				color: ${(props) => props.theme.colors.grey};
				text-transform: uppercase;
			}
			&:hover {
				> ul {
					visibility: visible;
					opacity: 1;
					max-height: 465px;
					padding-block: 20px;
				}
			}
			& > ul {
				${mediaQueries("md")`
					position: absolute;
					`}
				background-color: black;
				visibility: hidden;
				opacity: 0;
				max-height: 0;
				width: 232px;
				position: static;
				left: 0;
				top: 100%;
				display: flex;
				flex-direction: column;
				row-gap: 20px;
				padding-inline: 20px;
				border: 1px #48494a solid;
				border-top: none;
				transition: opacity 0.15s, max-height 0.3s;
				transition-timing-function: cubic-bezier(0.7, 0, 1, 1);
				z-index: 10;
				li {
					padding: 0;
					a {
						padding-top: 32px;
					}
				}
			}
		}
	}
`;

const DesktopMenu = () => {
	return (
		<PrimaryMenu>
			<ul>
				{MenuItems.map((menu, index) => (
					<li key={index}>
						<a href={menu.href}>{menu.label}</a>
						{menu.subitems && (
							<ul>
								{menu.subitems.map((subitems, index) => (
									<li key={index}>
										<a href={subitems.href}>{subitems.label}</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</PrimaryMenu>
	);
};

export default DesktopMenu;
