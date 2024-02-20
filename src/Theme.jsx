import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		black: "#000",
		grey: "#B5B7B7",
	},
	fonts: {
		body: "Matterhorn Regular, sans-serif",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
