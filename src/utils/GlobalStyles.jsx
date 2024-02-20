import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    @font-face {
        font-family: "Matterhorn Regular";
        font-style: normal;
        font-weight: normal;
        src: local("Matterhorn Regular"),
            url("/font/Matterhorn.woff") format("woff");
    }
    body {
        font-family: ${(props) => props.theme.fonts.body};
    }
    a {
		text-decoration: none;
    }
    span {
        display: block;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;
