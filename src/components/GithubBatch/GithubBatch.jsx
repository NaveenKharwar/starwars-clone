import React from "react";

import styled from "styled-components";
import { GithubIcon } from "lucide-react";

import { mediaQueries } from "../../utils/Breakpoints";

const Batch = styled.a`
  position: fixed;
  bottom: 30px;
  right: 10px;
  z-index: 999;
  background-color: rgba(46, 55, 74, 0.82);
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  border: 1px solid rgb(87, 96, 106);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
  ${mediaQueries("MidTab")(`
    bottom: 50px;
    right: 50px;
`)}
`;

const GithubBatch = () => {
  return (
    <Batch href="https://github.com/NaveenKharwar/starwars-clone">
      <span>Github</span>
      <GithubIcon />
    </Batch>
  );
};

export default GithubBatch;
