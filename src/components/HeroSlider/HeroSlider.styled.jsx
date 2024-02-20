import styled from "styled-components";
import { mediaQueries } from "../../utils/Breakpoints";

export const SlideContainer = styled.div`
  display: flex;
  transition: all 300ms;
`;

export const Slide = styled.div`
  min-width: 100%;
  max-width: 100%;
`;

export const SlideImage = styled.img`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
  ${mediaQueries("lg")(`
	position: absolute;
	height: 100%;
`)}
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  transition:
    opacity 250ms,
    padding-bottom 250ms;
  padding-bottom: 0;
  & {
    ${mediaQueries("lg")(`
			padding-bottom: 42.87%;
		`)}
  }
  ${mediaQueries("lg")(`
	height: 0;
`)}
`;

export const ContentBody = styled.div`
  position: static;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.right ? "0" : "")};
  z-index: 3;
  display: block;
  align-items: center;
  width: 100%;
  color: #fff;
  margin: ${(props) => (props.right ? "0 100px 0 0" : "0 0 0 100px")};
  padding: 30px 50px 20px 50px;
  ${mediaQueries("lg")(`
		position: absolute;
    padding: 0;
		width: 30%;
		display: flex;
`)}
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 35px;
  ${mediaQueries("lg")(`
    align-items: baseline;
`)}
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  line-height: 1.2;
  text-align: center;
  ${mediaQueries("md")(`
    font-size: 2rem;
`)}
  ${mediaQueries("lg")(`
  font-size: 2.3rem;
  text-align: left;
`)}
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const SliderNavigation = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  & {
    display: none;
    justify-content: space-between;
  }
  button {
    border-radius: 50%;
    padding-inline: 10px;
    padding-block: 8px;
    margin: 20px;
    cursor: pointer;
  }
  ${mediaQueries("lg")(`
    display: flex;
`)}
`;

export const PreviewCards = styled.div`
  position: static;
  bottom: 21px;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  z-index: 3;
  padding-top: 50px;
  padding-bottom: 20px;
  ul {
    list-style: none;
    display: flex;
    column-gap: 10px;
    li {
      position: relative;
      cursor: pointer;
      flex: 1;
    }
    img {
      width: 200px;
      display: none;
      &.active-preview {
        filter: blur(3px);
      }
      ${mediaQueries("lg")(`
        display: flex;
    `)}
    }
  }
  ${mediaQueries("sm")(`
    padding-top: 80px;
`)}
  ${mediaQueries("lg")(`
  position: absolute;
	display: flex;
	width: 100%;
	padding: 0;
`)}
`;

export const ProgressBar = styled.span`
  height: 4px;
  background-color: #222;
  &.bar-style {
    background-color: white;
    ${mediaQueries("lg")(`
      background-color: #1786eb;
  `)}
  }
`;

export const PreviewTitle = styled.div`
  color: white;
  height: calc(100% - 2px);
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  display: none;
  p {
    position: relative;
    font-size: 0.7rem;
    text-transform: uppercase;
    z-index: 2;
    i {
      font-style: normal;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000045;
    z-index: 1;
  }
  ${mediaQueries("lg")(`
    display: block;
`)}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  ${mediaQueries("sm")(`
    flex-direction: row;
`)}
`;

export const Button = styled.a`
  background-color: ${(props) => (props.primary ? "#fade4b" : "#000000")};
  color: ${(props) => (props.primary ? "#000000" : "#fff")};
  font-size: 1rem;
  line-height: 3;
  min-width: 210px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  border: ${(props) => (props.primary ? "none" : "1px solid #fade4b")};
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#f2d24e" : "#000000")};
    border: ${(props) => (props.primary ? "none" : "1px solid #fff")};
  }
`;
