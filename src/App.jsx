import React from "react";
import styled from "styled-components";

import { mediaQueries } from "./utils/Breakpoints.jsx";

import Theme from "./Theme";
import GlobalStyles from "./utils/GlobalStyles.jsx";
import Header from "./components/Header/Header";
import HeaderNotice from "./components/HeaderNotice/HeaderNotice.jsx";
import Footer from "./components/Footer/Footer.jsx";

import BgImage from "../public/images/background.jpeg";
import HeroSlider from "./components/HeroSlider/HeroSlider.jsx";
import CTA from "./components/CTA/CTA.jsx";
import CTAArticle from "./components/CTAArticle/CTAArticle.jsx";
import FeaturedArticle from "./components/FeaturedArticle/FeaturedArticle.jsx";

import ExploreMoreData from "./Data/ExploreMoreData.js";
import LatestVideoData from "./Data/LatestVideoData.js";
import LatestNewsAndFeaturesData from "./Data/LatestNewsAndFeaturesData.js";
import GithubBatch from "./components/GithubBatch/GithubBatch.jsx";

const BaseBG = styled.div`
  background-image: url(${BgImage});
  background-position: center top;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const ArticleSection = styled.section`
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  max-width: 1600px;
  margin: auto;
  ${mediaQueries("md")(`
    padding-left: 140px;
    padding-right: 140px;
`)}
`;

const article = [
  {
    title: "Latest News + Features",
    url: "/next-page",
    data: LatestNewsAndFeaturesData,
  },
  {
    title: "Latest Video",
    url: "/next-page",
    data: LatestVideoData,
  },
  {
    title: "Explore More",
    data: ExploreMoreData,
  },
];

const App = () => {
  return (
    <Theme>
      <GithubBatch />
      <BaseBG />
      <GlobalStyles />
      <Header />
      <HeaderNotice />
      <HeroSlider />
      <CTA />
      <CTAArticle />
      {article.map((item, index) => (
        <ArticleSection id="article-section" key={index}>
          <FeaturedArticle title={item.title} url={item.url} data={item.data} />
        </ArticleSection>
      ))}
      <Footer />
    </Theme>
  );
};

export default App;
