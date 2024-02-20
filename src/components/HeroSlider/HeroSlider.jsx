import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  SlideContainer,
  Slide,
  SlideImage,
  ImageWrapper,
  ContentBody,
  ContentDetails,
  Title,
  Description,
  SliderNavigation,
  PreviewCards,
  Button,
  ButtonGroup,
  ProgressBar,
  PreviewTitle,
} from "./HeroSlider.styled";

import HeroSliderData from "./HeroSliderData";
import { breakpoints } from "../../utils/Breakpoints";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
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

  const isTablet = breakpoints.lg && currentWidth <= breakpoints.lg;

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(HeroSliderData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === HeroSliderData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  setInterval(() => {
    if (current === HeroSliderData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }, 8000);

  return (
    <Container paddingInline="0px">
      <SlideContainer
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {HeroSliderData.map((data, id) => (
          <Slide key={id}>
            <ImageWrapper>
              <SlideImage src={data.image} alt={data.title} />
              <ContentBody
                style={{
                  margin: isTablet && "0",
                }}
                right={data.ContentRight}
              >
                <ContentDetails>
                  <Title
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  ></Title>
                  <Description>{data.description}</Description>
                  <ButtonGroup>
                    <Button href={data.PrimaryButtonLink} primary={true}>
                      read more
                    </Button>
                    {data.SecondaryButtonLink && (
                      <>
                        <Button href={data.SecondaryButtonLink}>
                          discover
                        </Button>
                      </>
                    )}
                  </ButtonGroup>
                </ContentDetails>
              </ContentBody>
            </ImageWrapper>
          </Slide>
        ))}
      </SlideContainer>
      <PreviewCards>
        <ul>
          {HeroSliderData.map((data, index) => (
            <li
              key={index}
              onClick={() => {
                setCurrent(index);
              }}
            >
              <ProgressBar className={index === current && `bar-style`} />
              <img
                src={data.thumbnail}
                alt={data.title}
                className={index === current && `active-preview`}
              />
              <PreviewTitle>
                <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
              </PreviewTitle>
            </li>
          ))}
        </ul>
      </PreviewCards>
      <SliderNavigation>
        <button onClick={previousSlide}>
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>
      </SliderNavigation>
    </Container>
  );
};

export default HeroSlider;
