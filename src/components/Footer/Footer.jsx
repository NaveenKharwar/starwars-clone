import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../../utils/Breakpoints";
import SocialMedia from "../SocialMedia/SocialMedia";
import Menu from "./Menu";

import FooterNotch from "../../assets/footer-notch.svg";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 96px;
  margin-top: 40px;
  span {
    font-size: 0.875rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const Notch = styled(SocialMediaContainer)`
  background-image: url(${FooterNotch});
  background-repeat: no-repeat;
  background-position: 22px 0;
  background-size: 52px 49px;
  position: relative;
  margin: 0;
  padding-top: 32px;
  background-color: #000;
  row-gap: 60px;
`;

const FooterMenu = styled(SocialMediaContainer)`
  position: relative;
  text-align: center;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    white-space: nowrap;
    overflow: hidden;
    ${mediaQueries("MidTab")(`
      flex-direction: row;
  `)}

    a {
      color: white;
      font-size: 0.75rem;
      line-height: 2rem;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        background-color: #ffffff;
        width: 100%;
        height: 1px;
        bottom: -5px;
        right: 0;
      }
    }
    li {
      position: relative;
      padding-left: 0;
      &:after {
        content: "";
        position: absolute;
        background: #48494a;
        width: 1px;
        height: 90%;
        bottom: 0;
        right: -16px;
        display: none;
        ${mediaQueries("MidTab")(`
          display: block;
      `)}
      }
      &:last-child {
        &:after {
          width: 0;
        }
      }
      ${mediaQueries("MidTab")(`
      padding-left: 33px;
    `)}
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Notch>
        <SocialMediaContainer>
          <span>More from star wars</span>
          <SocialMedia />
        </SocialMediaContainer>
        <FooterMenu>
          <span>TM & © Lucasfilm Ltd. All Rights Reserved</span>
          <ul>
            {Menu.map((items) => (
              <li key={items.id}>
                <a href={items.link}>{items.item}</a>
              </li>
            ))}
          </ul>
        </FooterMenu>
      </Notch>
    </FooterContainer>
  );
};

export default Footer;
