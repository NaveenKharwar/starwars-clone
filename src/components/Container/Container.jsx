import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  position: relative;
  max-width: 1600px;
  margin: auto;
  padding-block: ${(props) => props.paddingBlock || "25px"};
  padding-inline: ${(props) => props.paddingInline || "100px"};
  overflow: hidden;
`;

const Container = ({ children, paddingBlock, paddingInline }) => {
  return (
    <ContainerStyle paddingBlock={paddingBlock} paddingInline={paddingInline}>
      {children}
    </ContainerStyle>
  );
};

export default Container;
