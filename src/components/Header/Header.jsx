import React from "react";

import MobileHeaderArea from "./MobileHeaderArea";
import DesktopHeaderArea from "./DesktopHeaderArea";

const Header = () => {
	return (
		<>
			{/*Mobile & Tablet Header */}
			<MobileHeaderArea />
			{/* Desktop Header */}
			<DesktopHeaderArea />
		</>
	);
};

export default Header;
