import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../../utils/Breakpoints";

import ArticleContainerBG from "../../assets/thr-phase-3-gumstick-desktop.jpeg";
import HighRepublic from "../../assets/sw-thr-databank-gumstick.jpeg";
import HighRepublicBookMark from "../../assets/craft-ember-bookmark-ember-article-feature.jpeg";
import ArticleContainer, {
  RowTheme,
} from "../ArticleContainer/ArticleContainer";
import Notch from "../Notch/Notch";
import DotIndicator from "../DotIndicator/DotIndicator";
import FeaturedArticle from "../FeaturedArticle/FeaturedArticle";
import FeaturedArticleData from "../../Data/FeaturedArticleData";

const CTAArticleData = [
  {
    id: 0,
    heading:
      "Explore Star Wars: The High Republic in the StarWars.com Databank",
    image: HighRepublic,
    slug: "/databank/",
  },
  {
    id: 1,
    heading: "The High Republic’s Goodest Girl Makes a Good Bookmark",
    image: HighRepublicBookMark,
    slug: "/bookmark/",
  },
];

const ArticleMainContainer = styled.div`
  background-image: url(${ArticleContainerBG});
  background-color: #352f32;
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  max-width: 1600px;
  margin: auto;
  overflow: hidden;
  & {
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 60px;
    ${mediaQueries("md")(`
      padding-top: 0;
      padding-left: 140px;
      padding-right: 140px;
  `)}
  }
`;

const ArticleSection = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  ${mediaQueries("md")(`
    flex-wrap: nowrap;
`)}
`;

const CTAArticle = () => {
  return (
    <ArticleMainContainer>
      <ArticleSection>
        {CTAArticleData.map((data, index) => (
          <ArticleContainer key={index} theme={RowTheme} link={data.slug}>
            <div className="article-image">
              <img src={data.image} alt={data.heading} />
            </div>
            <div className="article-content">
              <DotIndicator />
              <h3>{data.heading}</h3>
              <Notch />
            </div>
          </ArticleContainer>
        ))}
      </ArticleSection>
      <FeaturedArticle data={FeaturedArticleData} />
    </ArticleMainContainer>
  );
};

export default CTAArticle;
