import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";

import { mediaQueries } from "../../utils/Breakpoints";

const Notice = styled.div``;

const DesktopNotice = styled.span`
  color: white;
  text-transform: uppercase;
  display: none;
  justify-content: center;
  text-align: center;
  ${mediaQueries("md")(`
	display: flex;
`)}
`;

const MobielNotice = styled(DesktopNotice)`
  display: flex;
  ${mediaQueries("md")(`
	display: none;
`)}
`;

const HeaderNotice = () => {
  return (
    <Container>
      <Notice>
        <a href="#">
          <DesktopNotice>
            All of your star wars favorites now streaming on disney+
          </DesktopNotice>
          <MobielNotice> Stream star wars on disney+ </MobielNotice>
        </a>
      </Notice>
    </Container>
  );
};

export default HeaderNotice;
