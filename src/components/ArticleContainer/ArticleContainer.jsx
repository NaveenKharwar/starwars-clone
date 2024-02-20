import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { mediaQueries, breakpoints } from "../../utils/Breakpoints";

const Article = styled.a`
  transition: all 0s 0.125s ease;
  & {
    display: flex;
    flex-direction: ${(props) => props.theme.direction};
  }
  .article-image {
    flex: ${(props) => props.theme.FlexImage};
    img {
      border-radius: ${(props) => props.theme.ImgBorderRadius};
      object-fit: cover;
      height: 100%;
    }
  }
  .article-content {
    flex: ${(props) => props.theme.FlexContent};
    position: relative;
    background-color: #1d1e1f;
    color: white;
    margin-bottom: 14px;
    border-radius: ${(props) => props.theme === RowTheme && "0 8px 0 0"};
    h3 {
      font-size: 14px;
      margin: 32px 12px 32px 12px;
    }
  }
  &:hover {
    .dot-indicator {
      div {
        background-color: white;
        box-shadow: 0 0 6px 1px white;
      }
    }
  }
  .notch {
    &::before {
      border-end-end-radius: 8px;
    }
    &::after {
      border-end-start-radius: ${(props) =>
        props.theme === ColumnTheme && "8px"};
    }
  }
`;

export const ColumnTheme = {
  direction: "column",
  ImgBorderRadius: "8px 8px 0 0",
  ContentBorderRadius: "8px 0 0 8px",
};

export const RowTheme = {
  direction: "row",
  ImgBorderRadius: "8px 0 0 8px",
  ContentBorderRadius: "0 8px 0 0",
  FlexImage: "4",
  FlexContent: "6",
};

const ArticleContainer = ({ children, theme, link }) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = breakpoints.sm && currentWidth <= breakpoints.sm;

  return (
    <Article
      theme={theme}
      href={link}
      style={{
        flexDirection: isMobile && "column",
      }}
    >
      {children}
    </Article>
  );
};

export default ArticleContainer;
