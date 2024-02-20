import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, X, Youtube } from "lucide-react";

const SocialIcons = styled.ul`
	color: white;
	list-style: none;
	padding: 0;
	display: inline-flex;
	align-items: center;
	column-gap: 10px;
`;

const KidsSection = styled.li`
	text-transform: uppercase;
	font-size: 10px;
	margin-left: 24px;
	&::before {
		content: "";
		height: 20px;
		margin: -5px -16px;
		position: absolute;
		width: 1px;
		background: #48494a;
		display: block;
	}
	span {
		background-color: white;
		padding-block: 4px;
		padding-inline: 6px;
		border-radius: 14px;
		a {
			color: black;
			&:hover {
				color: initial;
			}
		}
	}
`;

const SocialMedia = () => {
	return (
		<SocialIcons>
			<li>
				<Instagram size={24} />
			</li>
			<li>
				<X size={24} />
			</li>
			<li>
				<Facebook size={24} />
			</li>
			<li>
				<Youtube size={24} />
			</li>
			<KidsSection>
				<span>
					<a href="#">kids</a>
				</span>
			</KidsSection>
		</SocialIcons>
	);
};

export default SocialMedia;
