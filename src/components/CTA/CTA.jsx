import React from "react";
import styled from "styled-components";

import CTAStarwars from "../../assets/tentpolehero-desktop-thr-phase-iii.jpeg";
import Logo from "../../assets/thr-logos.png";

import Container from "../Container/Container";
import { mediaQueries } from "../../utils/Breakpoints";

const StartWarsBanner = styled.div`
  color: white;
  position: relative;
  .image-banner {
    position: relative;
    img {
      display: block;
      height: 320px;
      ${mediaQueries("MidTab")(`
        height: auto;
    `)}
    }
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  bottom: 0;
  padding-left: 40px;
  padding-right: 40px;
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 26px;
  }
  ${mediaQueries("sm")(`
    padding-left: 0;
    padding-right: 0;
  `)}
`;

const ContentLogo = styled.div`
  img {
    width: 300px;
    ${mediaQueries("sm")(`
      width: 400px;
    `)}
  }
`;

const ContentDescription = styled.div`
  p {
    font-size: 23px;
    text-align: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${(props) => (props.primary ? "#fade4b" : "#000000")};
  color: ${(props) => (props.primary ? "#000000" : "#fff")};
  font-size: 1rem;
  line-height: 3;
  text-align: center;
  text-transform: uppercase;
  border: ${(props) => (props.primary ? "none" : "1px solid #fade4b")};
  border-radius: 24px;
  min-width: 210px;
  height: 48px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#f2d24e" : "#000000")};
    border: ${(props) => (props.primary ? "none" : "1px solid #fff")};
  }
`;

const CTA = () => {
  return (
    <Container paddingInline={"0px"} paddingBlock={"0px"}>
      <StartWarsBanner>
        <div className="image-banner">
          <img src={CTAStarwars} alt="Starwars banner" />
        </div>
        <Content>
          <ContentLogo>
            <img src={Logo} alt="starwars logo" />
          </ContentLogo>
          <ContentDescription>
            <p>Trials of the Jedi: The Adventures Continue</p>
          </ContentDescription>
          <Button primary={true} href="#">
            explore
          </Button>
        </Content>
      </StartWarsBanner>
    </Container>
  );
};

export default CTA;
