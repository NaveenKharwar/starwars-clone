import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ArticleContainer, {
  ColumnTheme,
  RowTheme,
} from "../ArticleContainer/ArticleContainer";
import Notch from "../Notch/Notch";
import DotIndicator from "../DotIndicator/DotIndicator";

import {
  FeaturedArticleSection,
  FeaturedArticleParent,
  Slides,
  SliderNavigation,
  SectionHeading,
} from "./FeaturedArticle.styled.jsx";

import ChunkSize from "./ChunkSize.jsx";

const FeaturedArticle = ({ title, url, data }) => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const chunkSize = ChunkSize();

  const previousSlide = () => {
    if (currentChunk === 0) {
      return;
    }
    setCurrentChunk(currentChunk - 1);
  };

  const nextSlide = () => {
    if (currentChunk === chunkedData.length - 1) {
      return;
    }
    setCurrentChunk(currentChunk + 1);
  };

  const chunkedData = data.reduce(
    (acc, _, index) =>
      index % chunkSize === 0
        ? [...acc, data.slice(index, index + chunkSize)]
        : acc,
    [],
  );

  return (
    <FeaturedArticleSection>
      {title && (
        <SectionHeading>
          <h2>{title}</h2>
          {url && (
            <a href={url}>
              <span>view all</span>
              <ChevronRight />
            </a>
          )}
        </SectionHeading>
      )}

      <div
        style={{
          overflow: "hidden",
        }}
      >
        <FeaturedArticleParent
          style={{
            transform: `translateX(-${currentChunk * 100}%)`,
          }}
        >
          {chunkedData.map((chunk, chunkIndex) => (
            <Slides $chunkSize={chunkSize} key={chunkIndex}>
              {chunk.map((data, dataIndex) => (
                <ArticleContainer
                  theme={ColumnTheme}
                  key={dataIndex}
                  link={data.slug}
                >
                  <div className="article-image">
                    <img src={data.FeaturedImage} alt={data.title} />
                  </div>
                  <div className="article-content">
                    <DotIndicator />
                    <h3>{data.title}</h3>
                    <Notch />
                  </div>
                </ArticleContainer>
              ))}
            </Slides>
          ))}
        </FeaturedArticleParent>
      </div>
      <SliderNavigation>
        <li>
          {currentChunk !== 0 && (
            <button onClick={previousSlide}>
              <ChevronLeft size={30} />
            </button>
          )}
        </li>
        <li>
          {currentChunk !== chunkedData.length - 1 && (
            <button onClick={nextSlide}>
              <ChevronRight size={30} />
            </button>
          )}
        </li>
      </SliderNavigation>
    </FeaturedArticleSection>
  );
};

export default FeaturedArticle;
